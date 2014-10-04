var myToDoApp;
(function (myToDoApp) {
    var baseController = (function () {
        function baseController($scope) {
            $scope.loading = false;

            $scope.$on('LOADING', function () {
                $scope.loading = true;
            });
            $scope.$on('LOADED', function () {
                $scope.loading = false;
            });
        }
        baseController.$inject = ['$scope'];
        return baseController;
    })();
    myToDoApp.baseController = baseController;
})(myToDoApp || (myToDoApp = {}));
;

angular.module('myToDoApp').controller('baseController', myToDoApp.baseController);
//# sourceMappingURL=baseController.js.map
