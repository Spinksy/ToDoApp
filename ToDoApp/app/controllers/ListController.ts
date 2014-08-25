﻿/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/firebase/firebase.d.ts" />

module myToDoApp {

    export interface IToDoListCtrl extends ng.IScope{
        toDos: Resources.IToDo[];
        toDo: Resources.IToDo;
        addToDo(): void;
        deleteToDo(toDo: Resources.IToDo): void;
        editToDo(toDo: Resources.IToDo): void;
        goToEdit(toDo: Resources.IToDo): void;
        editState: boolean;
        setViewState(state: boolean): void;
    }

    export class ListController {

        public static $inject = ['$scope', 'toDoService', 'toaster', '$location'];

        constructor(
            $scope: myToDoApp.IToDoListCtrl, toDoService: myToDoApp.toDoService, toaster: any, $location: ng.ILocationProvider)
        {
            //ToDo view controls
            $scope.editState = false;
            $scope.setViewState = function (state) { $scope.editState = state; };

            //Get ToDos
            $scope.toDos = toDoService.get();

            //Get Todo
            $scope.toDo = new Resources.toDo();

            //Post Todo
            $scope.addToDo = function () {
                toDoService.post($scope.toDo);
                toaster.pop('success', $scope.toDo.name, "Saved successfully");
                $scope.toDo = new Resources.toDo();
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
                toaster.pop('success', toDo.name, "Successfully updated");
                $scope.editState = false;
            }

            $scope.goToEdit = function (toDo) {
                location.href = '#/ToDo/' + toDo.$id;
            }
        }
    }
} 

angular.module('myToDoApp')
    .controller('ListController', myToDoApp.ListController);