import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private nextId = 1;

  constructor() { }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    const newTodo: Todo = {
      id: this.nextId++,
      title,
      isCompleted: false
    };
    this.todos.push(newTodo);
  }

  toggleCompleted(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.isCompleted = !todo.isCompleted;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
