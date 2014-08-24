var myToDoApp;
(function (myToDoApp) {
    var config = (function () {
        function config($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'app/views/todolist.html',
                controller: 'ToDoListCtrl'
            });
        }
        return config;
    })();
    myToDoApp.config = config;
})(myToDoApp || (myToDoApp = {}));

myToDoApp.config.$inject = ['$routeProvider'];

angular.module('myToDoApp', ['ngRoute', 'firebase', 'toaster', 'Resources']).config(myToDoApp.config);

//# sourceMappingURL=app.js.map

var myToDoApp;
(function (myToDoApp) {
    var NavBarController = (function () {
        function NavBarController($scope, $location) {
            $scope.isActive = function (location) {
                return location === $location.path();
            };
        }
        NavBarController.$inject = ['$scope', '$location'];
        return NavBarController;
    })();
    myToDoApp.NavBarController = NavBarController;
})(myToDoApp || (myToDoApp = {}));

angular.module('myToDoApp').controller('NavBarController', myToDoApp.NavBarController);
//# sourceMappingURL=NavBarController.js.map

/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/firebase/firebase.d.ts" />
var myToDoApp;
(function (myToDoApp) {
    var ToDoListCtrl = (function () {
        function ToDoListCtrl($scope, toDoService, toaster) {
            //$scope.showActions = false;
            //Get ToDos
            $scope.toDos = toDoService.get();

            //Get Todo
            $scope.toDo = new Resources.toDo();

            //Post Todo
            $scope.addToDo = function () {
                toDoService.post($scope.toDo);
                toaster.pop('success', $scope.toDo.name, "Saved successfully");
                $scope.toDo = { name: undefined, description: undefined };
            };

            //Delete Todo
            $scope.deleteToDo = function (toDo) {
                var deleteName = toDo.name;
                toDoService.delete(toDo);
                toaster.pop('error', deleteName, "Removed successfully");
            };

            //Update ToDo
            $scope.editToDo = function (toDo) {
                toDoService.update(toDo);
                toaster.pop('success', $scope.toDo.name, "Successfully updated");
            };
        }
        ToDoListCtrl.$inject = ['$scope', 'toDoService', 'toaster'];
        return ToDoListCtrl;
    })();
    myToDoApp.ToDoListCtrl = ToDoListCtrl;
})(myToDoApp || (myToDoApp = {}));

angular.module('myToDoApp').controller('ToDoListCtrl', myToDoApp.ToDoListCtrl);
//# sourceMappingURL=ToDoListCtrl.js.map

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
            //Implement Interface methods
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
        toDoService.$inject = ['$firebase'];
        return toDoService;
    })();
    myToDoApp.toDoService = toDoService;
})(myToDoApp || (myToDoApp = {}));

angular.module('myToDoApp').service('toDoService', myToDoApp.toDoService);
//# sourceMappingURL=toDoService.js.map
