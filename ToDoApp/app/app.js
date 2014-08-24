var myToDoApp;
(function (myToDoApp) {
    var config = (function () {
        function config($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'app/views/todolist.html',
                controller: 'ListController'
            }).when('/ToDo/:toDoId', {
                templateUrl: 'app/views/editToDo.html',
                controller: 'EditController'
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

angular.module('myToDoApp', ['ngRoute', 'firebase', 'toaster', 'Resources']).config(myToDoApp.config);
//# sourceMappingURL=app.js.map
