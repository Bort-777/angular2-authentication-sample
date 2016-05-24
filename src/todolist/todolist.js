System.register(['angular2/core', './../store/todoStore', '../todoitem/todoitem', '../auth/auth'], function(exports_1, context_1) {
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
    var core_1, todoStore_1, todoitem_1, auth_1;
    var ToDoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todoStore_1_1) {
                todoStore_1 = todoStore_1_1;
            },
            function (todoitem_1_1) {
                todoitem_1 = todoitem_1_1;
            },
            function (auth_1_1) {
                auth_1 = auth_1_1;
            }],
        execute: function() {
            ToDoList = (function () {
                function ToDoList(store) {
                    this.newItem = 'test';
                    this.newColor = 'white';
                    this.auth = new auth_1.default();
                    this.store = store;
                }
                ToDoList.prototype.addItem = function () {
                    this.store.addItem(this.newItem, this.newColor);
                    this.newItem = '';
                };
                ToDoList.prototype.removeItem = function (item) {
                    this.store.removeItem(item);
                };
                ToDoList.prototype.edit = function (item) {
                    this.newItem = item.text;
                    this.newColor = item.color;
                    this.store.removeItem(item);
                };
                ToDoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        templateUrl: 'app/component/todolist/todolist.html',
                        styleUrls: ['app/component/todolist/todolist.css'],
                        directives: [[todoitem_1.default], [auth_1.default]]
                    }), 
                    __metadata('design:paramtypes', [todoStore_1.TodoStore])
                ], ToDoList);
                return ToDoList;
            }());
            exports_1("default", ToDoList);
        }
    }
});
//# sourceMappingURL=todolist.js.map