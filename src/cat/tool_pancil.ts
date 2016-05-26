

export class Tool_pancil {
  started: Bool;
  context: CanvasRenderingContext2D;
  constructor(context) {
    this.context = context;
    this.started = false;

  }

    mousedown = function (ev) {
        this.context.beginPath();
        this.context.moveTo(ev._x, ev._y);
        this.started = true;
    };

    // Эта функция вызывается каждый раз, когда вы перемещаете мышь.
    // Но рисование происходит только когда вы удерживаете кнопку мыши
    // нажатой.
    mousemove = function (ev) {

        if (this.started) {
            this.context.lineTo(ev._x, ev._y);
            this.context.stroke();
        }
    };

    // Событие при отпускании мыши
    mouseup = function (ev) {
        if (this.started) {
            this.mousemove(ev);
            this.started = false;
        }
    };

    mouseout = function (ev) {
        if (this.started) {
            this.started = false;
        }
    };

}
