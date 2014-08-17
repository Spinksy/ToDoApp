
module myToDoApp {
    export class config {

        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when('/',
                {
                    templateUrl: 'app/views/todolist.html',
                    controller: 'ToDoListCtrl'
                });
        }
    }
}

myToDoApp.config.$inject = ['$routeProvider'];

angular.module('myToDoApp',
    ['ngRoute', 'firebase'])
    .config(myToDoApp.config);

