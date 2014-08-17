var myToDoApp;
(function (myToDoApp) {
    var config = (function () {
        function config($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'app/views/todolist.html',
                controller: 'ToDoListCtrl'
            });
        }
        return config;
    })();
    myToDoApp.config = config;
})(myToDoApp || (myToDoApp = {}));

myToDoApp.config.$inject = ['$routeProvider'];

angular.module('myToDoApp', ['ngRoute', 'firebase', 'toaster']).config(myToDoApp.config);
//# sourceMappingURL=app.js.map
