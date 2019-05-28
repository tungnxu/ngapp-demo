export interface QueryConfig {
    path: string, //  path to collection
    where?: Condition[], 
    orderBy?: string, // field to orderBy
    limit: number, // limit per query
    reverse?: boolean, // reverse order?
    prepend?: boolean // prepend to source?
  }

export interface Condition {
  field: string;
  operator: firebase.firestore.WhereFilterOp;
  value: any;
}


  