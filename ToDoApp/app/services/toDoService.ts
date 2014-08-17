/// <reference path="../../scripts/typings/firebase/firebase.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />

module myToDoApp {

    export interface IToDoService {
        get(): any;
        post(toDo: any): void;
        update(toDo: any): void;
        delete(toDo: any): void;
    }

    export class toDoService implements IToDoService {

        private firebaseResource = this.$firebase(new Firebase("https://scorching-fire-1021.firebaseio.com/ToDoApp/data/todo"));

        constructor(private $firebase: any) {
        }

        //To Do Resource
        todoResource = this.firebaseResource.$asArray();

        get = function () {
            return this.todoResource;
        }

        post = function (toDo: any) {
           this.todoResource.$add(toDo);
        };

        update = function (toDo: any) {
            this.todoResource.$save(toDo);
        };

        delete = function (toDo: any) {
            this.todoResource.$remove(toDo);
        };
    }
}

myToDoApp.toDoService.$inject = ['$firebase'];

angular.module('myToDoApp').service('toDoService', myToDoApp.toDoService);