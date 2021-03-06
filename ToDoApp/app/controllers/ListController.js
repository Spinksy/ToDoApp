﻿/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/firebase/firebase.d.ts" />
var myToDoApp;
(function (myToDoApp) {
    var ListController = (function () {
        function ListController($scope, $modal, toDoService, toaster, $location) {
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
            };

            $scope.goToEdit = function (toDo) {
                location.href = '#/ToDo/' + toDo.$id;
            };

            $scope.setEditState = function (toDo) {
                toDo.editing = true;
                toDoService.update(toDo);
            };

            //Get ToDos
            $scope.toDos = getToDos();

            function getToDos() {
                var toDoList = toDoService.get();
                $scope.$emit('LOADED');
                return toDoList;
            }
            ;
        }
        ListController.$inject = ['$scope', '$modal', 'toDoService', 'toaster', '$location'];
        return ListController;
    })();
    myToDoApp.ListController = ListController;
})(myToDoApp || (myToDoApp = {}));

angular.module('myToDoApp').controller('ListController', myToDoApp.ListController);
//# sourceMappingURL=ListController.js.map
