System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoItem, TodoStore;
    return {
        setters:[],
        execute: function() {
            TodoItem = (function () {
                function TodoItem() {
                }
                return TodoItem;
            }());
            exports_1("TodoItem", TodoItem);
            TodoStore = (function () {
                function TodoStore() {
                    this.items = [];
                }
                TodoStore.prototype.addItem = function (newItem, newColor) {
                    this.items.push({
                        text: newItem,
                        color: newColor
                    });
                };
                TodoStore.prototype.removeItem = function (item) {
                    var index = this.items.indexOf(item);
                    this.items.splice(index, 1);
                };
                return TodoStore;
            }());
            exports_1("TodoStore", TodoStore);
        }
    }
});
//# sourceMappingURL=todoStore.js.map