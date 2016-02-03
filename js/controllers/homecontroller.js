var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: '../../views/login.html'
        })

        .state('old', {
            url: '/old',
            templateUrl: '../../views/login.html',
        })

        .state('middle', {
            url: '/middle',
            template: '../../views/login.html'
        })

        .state('child', {
            url: '/dashboard',
            templateUrl: '../../views/login.html'
        });

});

routerApp.controller('homecontroller', function($scope) {



});