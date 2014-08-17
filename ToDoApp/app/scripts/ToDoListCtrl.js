﻿/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/firebase/firebase.d.ts" />
var myToDoApp;
(function (myToDoApp) {
    var toDo = (function () {
        function toDo() {
        }
        return toDo;
    })();
    myToDoApp.toDo = toDo;

    var ToDoListCtrl = (function () {
        function ToDoListCtrl($scope, toDoService) {
            $scope.toDos = toDoService.get();
            $scope.toDo = new toDo();

            $scope.addToDo = function () {
                toDoService.post($scope.toDo);
                $scope.toDo = { name: undefined, description: undefined };
            };
        }
        ToDoListCtrl.$inject = ['$scope', 'toDoService'];
        return ToDoListCtrl;
    })();
    myToDoApp.ToDoListCtrl = ToDoListCtrl;
})(myToDoApp || (myToDoApp = {}));

angular.module('myToDoApp').controller('ToDoListCtrl', myToDoApp.ToDoListCtrl);
//# sourceMappingURL=ToDoListCtrl.js.map
