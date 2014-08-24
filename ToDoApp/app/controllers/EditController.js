var myToDoApp;
(function (myToDoApp) {
    var EditController = (function () {
        function EditController($scope, $routeParams, toDoService) {
            $scope.toDo = toDoService.getToDo($routeParams.toDoId);
        }
        EditController.$inject = ['$scope', '$routeParams', 'toDoService'];
        return EditController;
    })();
    myToDoApp.EditController = EditController;
})(myToDoApp || (myToDoApp = {}));
;

angular.module('myToDoApp').controller('EditController', myToDoApp.EditController);
//# sourceMappingURL=EditController.js.map
