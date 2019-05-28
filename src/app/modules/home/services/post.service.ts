import { Injectable } from '@angular/core';
import { CloudFilestorePaginationService } from 'src/app/core/http/cloud-filestore-pagination.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { QueryConfig } from 'src/app/shared/models/query.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PostService extends CloudFilestorePaginationService  {

  // private query: QueryConfig;
  public recentPostsdata : Observable<any>;
  
  //  done = new BehaviorSubject(false);
  //  loading = new BehaviorSubject(false);

  constructor(private afs: AngularFirestore) {
    super(afs);
  }

  public getPost(query: QueryConfig){
    this.recentPostsdata = super.get(query);
    return this.recentPostsdata;
  }

  public loadMore(){
    return super.loadMore();
  }
}
