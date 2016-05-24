System.register(['angular2/core', './../store/todoStore'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todoStore_1;
    var TodoItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todoStore_1_1) {
                todoStore_1 = todoStore_1_1;
            }],
        execute: function() {
            TodoItem = (function () {
                function TodoItem() {
                    this.display = 'none';
                    this.done = new core_1.EventEmitter();
                    this.editData = new core_1.EventEmitter();
                }
                TodoItem.prototype.doneClicked = function () {
                    this.done.next(this.item);
                };
                TodoItem.prototype.clickColor = function () {
                    switch (this.display) {
                        case 'none':
                            this.display = 'inline';
                            break;
                        case 'inline':
                            this.display = 'none';
                            break;
                    }
                };
                TodoItem.prototype.setCol = function (color) {
                    this.item.color = 'red';
                };
                TodoItem.prototype.edit = function () {
                    console.log('!');
                    this.editData.next(this.item);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', todoStore_1.TodoItem)
                ], TodoItem.prototype, "item", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TodoItem.prototype, "done", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TodoItem.prototype, "editData", void 0);
                TodoItem = __decorate([
                    core_1.Component({
                        selector: 'todo-item',
                        templateUrl: 'app/component/todoitem/todoitem.html',
                        styleUrls: ['app/component/todoitem/todoitem.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoItem);
                return TodoItem;
            }());
            exports_1("default", TodoItem);
        }
    }
});
//# sourceMappingURL=todoitem.js.map