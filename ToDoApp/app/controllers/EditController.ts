/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/firebase/firebase.d.ts" />

module myToDoApp {

    export interface EditScope extends ng.IScope
    {
        toDo: Resources.IToDo;
        toDoId: string;
        save(): void;
    }

    export class EditController {

        //Order of injected objects must match constructor
        public static $inject = ['$scope', '$modalInstance', 'toDoService', 'toaster', 'toDoId'];

        constructor(
            $scope: EditScope,
            $modalInstance: any,
            toDoService: myToDoApp.IToDoService,
            toaster: any,
            toDoId: string)
        {
            //$scope.toDo = new Resources.toDo();
            $scope.toDo = toDoService.getToDo(toDoId);

            $scope.save = function () {
                toDoService.update($scope.toDo);
                toaster.pop('success', $scope.toDo.name, "Successfully updated");
                $modalInstance.dismiss('cancel');
            }


        }
    }
};


angular.module('myToDoApp')
    .controller('EditController', myToDoApp.EditController);