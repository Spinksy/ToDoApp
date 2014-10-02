angular.module('Resources', []);

module Resources {

    export interface IToDo {
        name: string;
        description: string;
        $id: string;
        editing: boolean;
    }

    export class toDo implements IToDo{

        public name;
        public description;
        public $id;
        public editing;

        constructor() {
            this.editing = false;
        }
    }
}

