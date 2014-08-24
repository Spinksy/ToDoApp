module myToDoApp {

    export interface EditScope extends ng.IScope
    {
        toDo: Resources.IToDo;
    }

    export class EditController {

        public static $inject = ['$scope', '$routeParams', 'toDoService'];

        constructor($scope: EditScope, $routeParams: any, toDoService: myToDoApp.IToDoService) {

            $scope.toDo = toDoService.getToDo($routeParams.toDoId);
        }
    }
};


angular.module('myToDoApp')
    .controller('EditController', myToDoApp.EditController);