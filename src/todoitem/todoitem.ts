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
  display = 'hidden';
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
    console.log(this.display);
    switch (this.display) {
      case 'hidden':
          this.display= '';
        break;
      case '':
          this.display = 'hidden';
        break;
    }
  }

  setCol(color: String) {
    this.item.color = color;
  }

  edit() {
    console.log('!');
    this.editData.next(this.item);
  }

}
