describe("Edit Controller", function () {

    //Set global variables and Mocks
    var $scope;
    var mockToDo = {title: "Do Stuff", description: "stuff"};
    var mockToDoService = { getToDo: function (input) { return mockToDo } };

    //Make module available to test - will resolve any modular dependencies (ngRoute, firebase)
    beforeEach(module('myToDoApp'));

    //inject angular dependencies
    beforeEach(inject(function ($controller, $rootScope, $routeParams) {
        $scope = $rootScope.$new();
        $controller('EditController', { '$scope': $scope, '$routeParams': $routeParams, toDoService: mockToDoService });
    }));

    it("should be defined", function () {
        expect(myToDoApp.EditController).toBeDefined();
    });

    it("should instantiate a toDo", function () {
        expect($scope.toDo).toEqual(mockToDo);
        expect($scope.toDo.title).toEqual(mockToDo.title);
    });
});