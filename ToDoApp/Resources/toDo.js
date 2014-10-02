angular.module('Resources', []);

var Resources;
(function (Resources) {
    var toDo = (function () {
        function toDo() {
            this.editing = false;
        }
        return toDo;
    })();
    Resources.toDo = toDo;
})(Resources || (Resources = {}));
//# sourceMappingURL=toDo.js.map
