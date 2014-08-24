/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/firebase/firebase.d.ts" />

module myToDoApp {

    export interface IToDoListCtrl extends ng.IScope{
        toDos: Resources.IToDo[];
        toDo: Resources.IToDo;
        addToDo(): void;
        deleteToDo(toDo: Resources.IToDo): void;
        updateToDo(toDo: Resources.IToDo): void;
        currentView: {};
    }

    export class ToDoListCtrl {

        public static $inject = ['$scope', 'toDoService', 'toaster'];
        private views = [{ state: 'view', url: 'app/views/viewTodo.html' },
                         { state: 'edit', url: 'app/views/editTodo.html' }];

        constructor(
            $scope: myToDoApp.IToDoListCtrl, toDoService: myToDoApp.toDoService, toaster: any)
        {
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
            $scope.updateToDo = function (toDo) {
                toDoService.update(toDo);
                toaster.pop('success', $scope.toDo.name, "Successfully updated");
            }

            $scope.currentView = this.views[0];
        }
    }
} 

angular.module('myToDoApp')
    .controller('ToDoListCtrl', myToDoApp.ToDoListCtrl);