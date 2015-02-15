/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/firebase/firebase.d.ts" />
var myToDoApp;
(function (myToDoApp) {
    var EditController = (function () {
        function EditController($scope, $modalInstance, toDoService, toaster, toDoId) {
            //$scope.toDo = new Resources.toDo();
            $scope.toDo = toDoService.getToDo(toDoId);

            $scope.save = function () {
                toDoService.update($scope.toDo);
                toaster.pop('success', $scope.toDo.name, "Successfully updated");
                $modalInstance.dismiss('cancel');
            };
        }
        EditController.$inject = ['$scope', '$modalInstance', 'toDoService', 'toaster', 'toDoId'];
        return EditController;
    })();
    myToDoApp.EditController = EditController;
})(myToDoApp || (myToDoApp = {}));
;

angular.module('myToDoApp').controller('EditController', myToDoApp.EditController);
//# sourceMappingURL=EditController.js.map
