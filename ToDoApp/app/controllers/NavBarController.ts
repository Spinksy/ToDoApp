module myToDoApp {

    export interface INavBarScope extends ng.IScope {
        isActive(location: string): boolean;
    }

    export class NavBarController {

        public static $inject = ['$scope', '$location'];

        constructor($scope: INavBarScope, $location: ng.ILocationService) {
            $scope.isActive = function (location: string) {
                return location === $location.path();
            };
        }
    }
} 

angular.module('myToDoApp')
    .controller('NavBarController', myToDoApp.NavBarController);