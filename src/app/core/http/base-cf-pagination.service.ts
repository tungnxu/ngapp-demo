import { Injectable } from '@angular/core';
import { QueryConfig } from 'src/app/shared/models/query.model';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable()
export abstract class BaseCFPaginationService {
    public abstract get(query: QueryConfig, opts?: any): Observable<any> ;
    public abstract loadMore();
    public abstract getCursor();
    public abstract mapAndUpdate(col: AngularFirestoreCollection<any>);
}