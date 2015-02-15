var myToDoApp;
(function (myToDoApp) {
    var config = (function () {
        //The routing for the ng-view element
        function config($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'app/views/toDoList.html',
                controller: 'ListController'
            }).when('/about', {
                templateUrl: 'app/views/about.html'
            }).when('/contact', {
                templateUrl: 'app/views/contact.html'
            });
        }
        return config;
    })();
    myToDoApp.config = config;
})(myToDoApp || (myToDoApp = {}));

myToDoApp.config.$inject = ['$routeProvider'];

angular.module('myToDoApp', ['ngRoute', 'firebase', 'toaster', 'Resources', 'ui.bootstrap']).config(myToDoApp.config);
//# sourceMappingURL=app.js.map
