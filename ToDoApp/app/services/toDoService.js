/// <reference path="../../scripts/typings/firebase/firebase.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var myToDoApp;
(function (myToDoApp) {
    var toDoService = (function () {
        function toDoService($firebase) {
            this.$firebase = $firebase;
            this.firebaseResource = this.$firebase(new Firebase("https://scorching-fire-1021.firebaseio.com/ToDoApp/data/todo"));
            //To Do Resource
            this.todoResource = this.firebaseResource.$asArray();
            this.get = function () {
                return this.todoResource;
            };
            this.post = function (toDo) {
                this.todoResource.$add(toDo);
            };
            this.update = function (toDo) {
                this.todoResource.$save(toDo);
            };
            this.delete = function (toDo) {
                this.todoResource.$remove(toDo);
            };
        }
        return toDoService;
    })();
    myToDoApp.toDoService = toDoService;
})(myToDoApp || (myToDoApp = {}));

myToDoApp.toDoService.$inject = ['$firebase'];

angular.module('myToDoApp').service('toDoService', myToDoApp.toDoService);
//# sourceMappingURL=toDoService.js.map
