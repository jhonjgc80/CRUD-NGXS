import { Todo } from '../models/todo';

export class AddTodo {
    static readonly type = '[Todo] AddTodo]';
    constructor(public payload: Todo) {}
}

export class GetTodo {
    static readonly type = '[Todo] GetTodo]';
}

export class UpdateTodo {
    static readonly type = '[Todo] UpdateTodo]';
    constructor(public payload: Todo, public id: number) {}
}

export class DeleteTodo {
    static readonly type = '[Todo] DeleteTodo]';
    constructor(public id: number) {}
}

export class SetSelectedTodo {
    static readonly type = '[Todo] setSelectedTodo]';
    constructor(public payload: Todo) {}
}




