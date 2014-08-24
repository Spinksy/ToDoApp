angular.module('Resources', []);

module Resources {

    export interface IToDo {
        name: string;
        description: string;
        $id: string;
    }

    export class toDo implements IToDo{

        public name;
        public description;
        public $id;
    }
}

