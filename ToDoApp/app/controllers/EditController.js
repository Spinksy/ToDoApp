﻿/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/firebase/firebase.d.ts" />
var myToDoApp;
(function (myToDoApp) {
    var ToDoController = (function () {
        function ToDoController($scope, $modalInstance, toDoService, toaster, toDoId) {
            //$scope.toDo = new Resources.toDo();
            $scope.toDo = toDoService.getToDo(toDoId);

            $scope.save = function () {
                toDoService.update($scope.toDo);
                toaster.pop('success', $scope.toDo.name, "Successfully updated");
                $modalInstance.dismiss('cancel');
            };

            $scope.delete = function () {
                var deleteToDo = $scope.toDo;
                toDoService.delete($scope.toDo);
                toaster.pop('danger', deleteToDo.name, "Deleted");
            };
        }
        ToDoController.$inject = ['$scope', '$modalInstance', 'toDoService', 'toaster', 'toDoId'];
        return ToDoController;
    })();
    myToDoApp.ToDoController = ToDoController;
})(myToDoApp || (myToDoApp = {}));
;

angular.module('myToDoApp').controller('ToDoController', myToDoApp.ToDoController);
//# sourceMappingURL=EditController.js.map
