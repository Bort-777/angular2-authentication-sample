import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TodoItem as TodoItemModel} from './../store/todoStore';

let styles   = require('./todoitem.css');
let template = require('./todoitem.html');

@Component({
  selector: 'todo-item',
  template: template,
  styles  : [ styles ]
})
export default class TodoItem {
  display = 'none';
  @Input()
  item: TodoItemModel;

  @Output()
  done = new EventEmitter();

  @Output()
  editData = new EventEmitter();


  doneClicked() {
    this.done.next(this.item);
  }

  clickColor() {
    switch (this.display) {
      case 'none':
          this.display= 'inline';
        break;
      case 'inline':
          this.display = 'none';
        break;
    }
  }

  setCol(color: String) {
    this.item.color = 'red';
  }

  edit() {
    console.log('!');
    this.editData.next(this.item);
  }

}
