import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TodoState } from '../../states/todo.state';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { GetTodo, DeleteTodo, UpdateTodo, SetSelectedTodo } from '../../actions/todo.action';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  @Select(TodoState.getTodoList) todos$: Observable<Todo[]>;


  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetTodo());
  }

  deleteTodo(id: number) {
    this.store.dispatch(new DeleteTodo(id));
  }

  editTodo(payload: Todo) {
    this.store.dispatch(new SetSelectedTodo(payload));
  }

}
