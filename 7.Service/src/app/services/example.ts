import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Example {
  work: string = "";
  todos: string[] = [];

  constructor() { }
  debugger: any;
  save() {
    this.todos.push(this.work);
    this.work = "";
  }
}
