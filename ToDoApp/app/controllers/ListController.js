/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/firebase/firebase.d.ts" />
var myToDoApp;
(function (myToDoApp) {
    var ListController = (function () {
        function ListController($scope, toDoService, toaster, $location) {
            //ToDo view controls
            $scope.editState = false;
            $scope.setViewState = function (state) {
                $scope.editState = state;
            };

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
            };

            $scope.goToEdit = function (toDo) {
                location.href = '#/ToDo/' + toDo.$id;
            };
        }
        ListController.$inject = ['$scope', 'toDoService', 'toaster', '$location'];
        return ListController;
    })();
    myToDoApp.ListController = ListController;
})(myToDoApp || (myToDoApp = {}));

angular.module('myToDoApp').controller('ListController', myToDoApp.ListController);
//# sourceMappingURL=ListController.js.map
