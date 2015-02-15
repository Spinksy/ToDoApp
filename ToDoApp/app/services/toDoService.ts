/// <reference path="../../scripts/typings/firebase/firebase.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />

module myToDoApp {

    export interface IToDoService {
        get(): any;
        create(toDo: Resources.IToDo): void;
        update(toDo: Resources.IToDo): void;
        delete(toDo: Resources.IToDo): void;
        getToDo(id: string): Resources.IToDo;
    }

    export class toDoService implements IToDoService {

        public static $inject = ['$firebase'];

        constructor(private $firebase: any) {

        }

        //Private properties
        private todoResource = this.$firebase(new Firebase("https://scorching-fire-1021.firebaseio.com/ToDoApp/data/todo")).$asArray();

        //Get list of record    
        get = function () {
            return this.todoResource;
        }

        //Get a single record
        getToDo = function (id) {
            return this.todoResource.$getRecord(id);
        }

        //Add a new record
        create = function (toDo: Resources.IToDo) {
           this.todoResource.$add(toDo);
        };

        //Update an existing record
        update = function (toDo: any) {
            this.todoResource.$save(toDo);
        };

        //Delete a record
        delete = function (toDo: any) {
            this.todoResource.$remove(toDo);
        };


    }
}

angular.module('myToDoApp')
    .service('toDoService', myToDoApp.toDoService);