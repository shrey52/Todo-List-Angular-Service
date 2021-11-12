import { Component, OnInit } from '@angular/core';
import { TodoMergeService } from '../todo-merge.service';


@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  todoArray = [] as any;
  constructor(private TodoM:TodoMergeService) { }

  ngOnInit(): void {
    this.todoArray = this.TodoM.gettodo()
  }

}
