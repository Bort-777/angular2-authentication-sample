import {Component} from '@angular/core';
import {TodoStore, TodoItem as TodoModelItem} from './../store/todoStore';
import TodoItem from '../todoitem/todoitem';
import { NgGrid, NgGridItem } from 'angular2-grid';

let template = require('./todolist.html');
let styles = require('./todolist.css');

@Component({
  selector: 'todo-list',
  template: template,
  styles: [ styles ],
  directives: [TodoItem, NgGrid, NgGridItem]
})
export default class ToDoList {
  newItem = 'test';
  newColor = 'black';
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
