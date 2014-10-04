/// <reference path="../../scripts/typings/firebase/firebase.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />

module myToDoApp {

    export interface IToDoService {
        get(): any;
        post(toDo: any): void;
        update(toDo: any): void;
        delete(toDo: any): void;
        getToDo(id: string): Resources.IToDo;
    }

    export class toDoService implements IToDoService {

        public static $inject = ['$firebase'];

        constructor(private $firebase: any) {

        }

        //Private properties

        private todoResource = this.$firebase(new Firebase("https://scorching-fire-1021.firebaseio.com/ToDoApp/data/todo")).$asArray();

        //Implement Interface methods       
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

        getToDo = function (id) {
            return this.$firebase(new Firebase("https://scorching-fire-1021.firebaseio.com/ToDoApp/data/todo/").child(id)).$asObject();
        }
    }
}

angular.module('myToDoApp').service('toDoService', myToDoApp.toDoService);