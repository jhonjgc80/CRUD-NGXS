import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url = 'https://jsonplaceholder.typicode.com/todos';

  constructor( private http: HttpClient ) { }

  getTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Todo[]>(url);
  }

  deleteTodo(id: number) {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.delete(`${url}/id`);
  }

  addTodo(payload: Todo) {

    return this.http.post<Todo>(this.url, payload);
  }

  updateTodo(payload: Todo, id: number) {
    return this.http.put<Todo>(`${this.url}/id`, payload);
  }
}
