module myToDoApp {

    export class config {

        //The routing for the ng-view element
        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when('/',
                {
                    templateUrl: 'app/views/toDoList.html',
                    controller: 'ListController'
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

angular.module('myToDoApp', ['ngRoute', 'firebase', 'toaster', 'Resources', 'ui.bootstrap'])
    .config(myToDoApp.config);

