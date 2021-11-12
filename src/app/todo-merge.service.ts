import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoMergeService {
  public todoArray = [] as any;
  gettodo(){
    return this.todoArray;
  }
  constructor() { }
}
