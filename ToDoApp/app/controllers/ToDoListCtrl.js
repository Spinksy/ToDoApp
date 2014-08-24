/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/firebase/firebase.d.ts" />
var myToDoApp;
(function (myToDoApp) {
    var ToDoListCtrl = (function () {
        function ToDoListCtrl($scope, toDoService, toaster) {
            this.views = [
                { state: 'view', url: 'app/views/viewTodo.html' },
                { state: 'edit', url: 'app/views/editTodo.html' }];
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
            };

            $scope.currentView = this.views[0];
        }
        ToDoListCtrl.$inject = ['$scope', 'toDoService', 'toaster'];
        return ToDoListCtrl;
    })();
    myToDoApp.ToDoListCtrl = ToDoListCtrl;
})(myToDoApp || (myToDoApp = {}));

angular.module('myToDoApp').controller('ToDoListCtrl', myToDoApp.ToDoListCtrl);
//# sourceMappingURL=ToDoListCtrl.js.map
