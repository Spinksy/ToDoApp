module myToDoApp {
    export class config {

        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when('/',
                {
                    templateUrl: 'app/views/todolist.html',
                    controller: 'ListController'
                })
                .when('/ToDo/:toDoId',
                {
                    templateUrl: 'app/views/editToDo.html',
                    controller: 'EditController'
                })
                .when('/about',
                {
                    templateUrl: 'app/views/about.html',
                })
                .when('/contact',
                {
                    templateUrl: 'app/views/contact.html',
                });
        }
    }
}

myToDoApp.config.$inject = ['$routeProvider'];

angular.module('myToDoApp',
    ['ngRoute', 'firebase', 'toaster', 'Resources'])
    .config(myToDoApp.config);

