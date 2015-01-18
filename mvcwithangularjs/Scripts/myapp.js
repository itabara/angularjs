(function () {
    // create module
    var app = angular.module('MyApp', ['ngRoute']); // Will use ['ng-Route'] when we will implement routing

    // create controller
    app.controller('HomeController', function ($scope) {
        // here $scope is used to share data between view and controller
        $scope.Message = "Hello from AngularJS";
    });
})();