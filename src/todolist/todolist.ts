import {Component} from '@angular/core';
import {TodoStore, TodoItem as TodoModelItem} from './../store/todoStore';
import TodoItem from '../todoitem/todoitem';

let template = require('./todolist.html');
let styles = require('./todolist.css');

@Component({
  selector: 'todo-list',
  template: template,
  styles: [ styles ],
  directives: [[TodoItem]]
})
export default class ToDoList {
  newItem = 'test';
  newColor = 'white';
  store: TodoStore;

  constructor(store: TodoStore) {
    this.store = store;
  }

  addItem() {
    this.store.addItem(this.newItem, this.newColor);
    this.newItem = '';
  }

  removeItem(item: TodoModelItem) {
    this.store.removeItem(item);
  }

  edit(item: TodoModelItem) {
    this.newItem = item.text;
    this.newColor = item.color;
    this.store.removeItem(item);
  }
}
