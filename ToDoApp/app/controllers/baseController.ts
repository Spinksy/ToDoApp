module myToDoApp {

    export interface IBaseController {
        loading: boolean;
        $on(eventName: string, action: any): void;
    }

    export class baseController {

        public static $inject = ['$scope'];

        constructor($scope: myToDoApp.IBaseController) {

            $scope.loading = true;

            $scope.$on('LOADING', function () { $scope.loading = true; });
            $scope.$on('LOADED', function () { $scope.loading = false; });
        }
    }
};


angular.module('myToDoApp')
    .controller('baseController', myToDoApp.baseController); 