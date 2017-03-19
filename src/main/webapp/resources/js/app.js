'use strict';

var AngularSpringmvcMybatis = {};

var App = angular.module('AngularSpringmvcMybatis', ['AngularSpringmvcMybatis.filters', 'AngularSpringmvcMybatis.services', 'AngularSpringmvcMybatis.directives']);

// Declare app level module which depends on filters, and services
App.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/users', {
        templateUrl: 'users/layout',
        controller: UserController
    });
    $routeProvider.when('/publishs', {
        templateUrl: 'publishs/publish',
        controller: PublishController
    });
    $routeProvider.when('/', {
        templateUrl: 'index.html' ,
        controller: mainController
    });
    
    $routeProvider.otherwise({redirectTo: '/publishs'});
}]);
