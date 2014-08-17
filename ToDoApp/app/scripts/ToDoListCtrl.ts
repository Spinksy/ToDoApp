/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/firebase/firebase.d.ts" />


module myToDoApp {

    export interface IToDoListCtrl extends ng.IScope{
        addToDo(): void;
        toDos: myToDoApp.toDo[];
        toDo: myToDoApp.toDo;
    }

    export class toDo {
        name: string;
        description: string;
    }

    export class ToDoListCtrl {

        public static $inject = ['$scope', 'toDoService', 'toaster'];

        constructor(
            $scope: myToDoApp.IToDoListCtrl, toDoService: myToDoApp.toDoService, toaster: any)
        {

            $scope.toDos = toDoService.get();
            $scope.toDo = new toDo();

            $scope.addToDo = function () {
                toDoService.post($scope.toDo);
                toaster.pop('success', $scope.toDo.name, "Saved successfully");
                //Notifier.success($scope.toDo.name + " Saved");
                $scope.toDo = { name: undefined, description: undefined };
            };
        }
    }
} 

angular.module('myToDoApp')
    .controller('ToDoListCtrl', myToDoApp.ToDoListCtrl);