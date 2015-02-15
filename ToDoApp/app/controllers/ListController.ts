/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
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
        setEditState(toDo: Resources.IToDo): void;
        viewToDo(userId: string): void;
    }

    export class ListController {

        public static $inject = ['$scope', '$modal', 'toDoService', 'toaster', '$location'];

        constructor(
            $scope: myToDoApp.IToDoListCtrl,
            $modal: any,
            toDoService: myToDoApp.toDoService,
            toaster: any,
            $location: ng.ILocationProvider)
        {

            //Get Todo
            $scope.toDo = new Resources.toDo();

            // Modal: called by edit(userId) and Add new user
            $scope.viewToDo = function (userId) {
                var modalInstance = $modal.open({
                    templateUrl: 'app/views/viewToDo.html',
                    controller: 'ToDoController',
                    resolve: {
                        toDoId: function () {
                            return userId;
                        }
                    }
                });
            };

            //Post Todo
            $scope.addToDo = function () {
                toDoService.create($scope.toDo);
                toaster.pop('success', $scope.toDo.name, "Saved successfully");
                $scope.toDo = new Resources.toDo();
            };

            //Delete Todo
            $scope.deleteToDo = function (toDo) {
                var deleteName = toDo.name;
                toDoService.remove(toDo);
                toaster.pop('error', deleteName, "Removed successfully");
            };

            //Update ToDo
            $scope.editToDo = function (toDo) {
                toDo.editing = false;
                toDoService.update(toDo);
                toaster.pop('success', toDo.name, "Successfully updated");
            }

            $scope.goToEdit = function (toDo) {
                location.href = '#/ToDo/' + toDo.$id;
            }

            $scope.setEditState = function (toDo) {
                toDo.editing = true;
                toDoService.update(toDo);
            }

            //Get ToDos
            $scope.toDos = getToDos();

            function getToDos() {
                var toDoList = toDoService.get();
                $scope.$emit('LOADED'); 
                return toDoList;
            };
        }
    }
} 

angular.module('myToDoApp')
    .controller('ListController', myToDoApp.ListController);