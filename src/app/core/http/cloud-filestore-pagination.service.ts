import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { tap, scan } from 'rxjs/operators';
import { QueryConfig } from 'src/app/shared/models/query.model';
import { BaseCFPaginationService } from './base-cf-pagination.service';

@Injectable()
export class CloudFilestorePaginationService implements BaseCFPaginationService {
  private query: QueryConfig;
  private _data = new BehaviorSubject([]);
  private _done = new BehaviorSubject(false);
  private _loading = new BehaviorSubject(false);

  done: Observable<boolean> = this._done.asObservable();
  loading: Observable<boolean> = this._loading.asObservable();

  constructor(private db: AngularFirestore) {
  }

  public get(query: QueryConfig, opts?: any): Observable<any> {
    this.query = query;

    const first = this.db.collection<any>(query.path, ref => {
     
      let refBuild : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      if(query.limit != 0){
        refBuild = refBuild.limit(query.limit);
      }else {
        refBuild = refBuild.limit(30);
      }
      if(query.where && query.where.length > 0){
        query.where.forEach(x => {
          refBuild = refBuild.where(x.field, x.operator, x.value);
        })
      }else {
        if( query.orderBy && query.reverse){
          refBuild = refBuild.orderBy(query.orderBy, query.reverse ? 'desc' : 'asc')
        }
      }
      
      

      return refBuild;
    });

    this.mapAndUpdate(first);

    return this._data.asObservable().pipe(
      scan((acc, val) => query.prepend ? val.concat(acc) : acc.concat(val))
      )
  }

  public loadMore() {
    const cursor = this.getCursor();

    const more = this.db.collection(this.query.path, ref => {
      return ref
              .orderBy(this.query.orderBy, this.query.reverse ? 'desc' : 'asc')
              .limit(this.query.limit)
              .startAfter(cursor)
    })
    this.mapAndUpdate(more);
  }

  public getCursor() {
    const current = this._data.value
    if (current.length) {
      return this.query.prepend ? current[0].doc : current[current.length - 1].doc 
    }
    return null
  }

  public mapAndUpdate(col: AngularFirestoreCollection<any>) {
    if (this._done.value || this._loading.value) { return };

    if (this._loading.value) { return };

    return col.snapshotChanges().pipe(
      tap(arr => {
        let values = arr.map(a => {
          const data = a.payload.doc.data();
          const doc = a.payload.doc;
          const id = a.payload.doc.id;
          return { id, ...data, doc };
        })
  
        // If prepending, reverse the batch order
        values = this.query.prepend ? values.reverse() : values

        // update source with new values, done loading
        this._data.next(values)
        this._loading.next(false)

        // no more values, mark done
        if (!values.length) {
          this._done.next(true)
        }
    }))
    .subscribe()
  }
}
