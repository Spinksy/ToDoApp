describe('NavBarController', function () {

    var $rootScope, $scope, $controller, $location;

    beforeEach(module('myToDoApp'));

    beforeEach(inject(function(_$rootScope_, _$controller_, _$location_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $location = _$location_;

        $controller('NavBarController', {'$rootScope' : $rootScope, '$scope' : $scope, '$location' : $location})
    }));

    it("should not fuck up", function () {
        
        expect(true).toBe(true);
    });

});