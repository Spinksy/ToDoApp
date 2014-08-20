var myToDoApp;
(function (myToDoApp) {
    var NavBarController = (function () {
        function NavBarController($scope, $location) {
            $scope.isActive = function (location) {
                return location === $location.path();
            };
        }
        NavBarController.$inject = ['$scope', '$location'];
        return NavBarController;
    })();
    myToDoApp.NavBarController = NavBarController;
})(myToDoApp || (myToDoApp = {}));

angular.module('myToDoApp').controller('NavBarController', myToDoApp.NavBarController);
//# sourceMappingURL=NavBarController.js.map
