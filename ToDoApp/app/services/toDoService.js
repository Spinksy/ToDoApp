/// <reference path="../../scripts/typings/firebase/firebase.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
var myToDoApp;
(function (myToDoApp) {
    var toDoService = (function () {
        function toDoService($firebase) {
            this.$firebase = $firebase;
            //Private properties
            this.todoResource = this.$firebase(new Firebase("https://scorching-fire-1021.firebaseio.com/ToDoApp/data/todo")).$asArray();
            //Get list of record
            this.get = function () {
                return this.todoResource;
            };
            //Get a single record
            this.getToDo = function (id) {
                return this.todoResource.$getRecord(id);
            };
            //Add a new record
            this.create = function (toDo) {
                this.todoResource.$add(toDo);
            };
            //Update an existing record
            this.update = function (toDo) {
                this.todoResource.$save(toDo);
            };
            //Delete a record
            this.remove = function (toDo) {
                this.todoResource.$remove(toDo);
            };
        }
        toDoService.$inject = ['$firebase'];
        return toDoService;
    })();
    myToDoApp.toDoService = toDoService;
})(myToDoApp || (myToDoApp = {}));

angular.module('myToDoApp').service('toDoService', myToDoApp.toDoService);
//# sourceMappingURL=toDoService.js.map
