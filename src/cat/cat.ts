import {Component, Input, ViewChild, ElementRef} from '@angular/core';
import {Tool_pancil} from './tool_pancil';

let template = require('./cat.html');
let context : CanvasRenderingContext2D;
let tool;

@Component({
  selector: 'cat',
  directives: [Cat],
  template: template
})
export class Cat {

  constructor(){
    }

 @ViewChild("chessCanvas") cat: ElementRef;
    ngAfterViewInit() { // wait for the view to init before using the element

    context = this.cat.nativeElement.getContext("2d");
    tool = new Tool_pancil(context);
    console.log(tool);
    }


    ev_canvas (ev) {
        if (ev.layerX || ev.layerX == 0) { // Firefox
            ev._x = ev.layerX;
            ev._y = ev.layerY;
        } else if (ev.offsetX || ev.offsetX == 0) { // Opera
            ev._x = ev.offsetX;
            ev._y = ev.offsetY;
        }

        // Вызываем обработчик события tool
        var func = tool[ev.type];
        if (func) {
            func.call(tool, ev);

        }
    }

}
