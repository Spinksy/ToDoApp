/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/firebase/firebase.d.ts" />

module myToDoApp {

    export interface EditScope extends ng.IScope
    {
        toDo: Resources.IToDo;
        toDoId: string;
        remove(): void;
        save(): void;
        cancel(): void;
    }

    export class ToDoController {

        //Order of injected objects must match constructor
        public static $inject = ['$scope', '$modalInstance', 'toDoService', 'toaster', 'toDoId'];

        constructor(
            $scope: EditScope,
            $modalInstance: any,
            toDoService: myToDoApp.IToDoService,
            toaster: any,
            toDoId: string)
        {
            $scope.toDo = toDoService.getToDo(toDoId);
            
            $scope.save = function () {
                toDoService.update($scope.toDo);
                toaster.pop('success', $scope.toDo.name, "Successfully updated");
                $modalInstance.dismiss('cancel');
            }

            $scope.remove = function () {
                var deleteName = $scope.toDo.name;
                toDoService.remove($scope.toDo);
                toaster.pop('error', deleteName, "Removed successfully");
                $modalInstance.dismiss('cancel');
            }
        }
    }
};

angular.module('myToDoApp')
    .controller('ToDoController', myToDoApp.ToDoController);