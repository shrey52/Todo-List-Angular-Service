import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../global';
import { TodoMergeService } from '../todo-merge.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {
  todoArray = [] as any;
  arraylen = 0;
  addTodo(value: string){
    this.todoArray.push(value)
    this.arraylen += 1
  }
  deleteItem(todo: string){
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(todo== this.todoArray[i]){
        this.todoArray.splice(i,1)
      }
    }
    this.arraylen -= 1
  }
  constructor(private TodoM:TodoMergeService){
  }
  ngOnInit():void{
    this.todoArray = this.TodoM.gettodo()
  }
}
