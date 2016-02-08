angular.module('dynamic.form.module',[]);
<<<<<<< HEAD
angular.module('offerApp', ['ui.router','dynamic.form.module']);
angular.module('offerApp').constant('resourcePath', '/');
angular.module('offerApp').constant('viewPath', 'views/');
angular.module('offerApp').constant('geolocation_msgs', {
        'errors.location.unsupportedBrowser':'Browser does not support location services',
        'errors.location.permissionDenied':'You have rejected access to your location',
        'errors.location.positionUnavailable':'Unable to determine your location',
        'errors.location.timeout':'Service timeout has been reached'
=======
var offerApp = angular.module('offerApp', ['ui.router','dynamic.form.module']);

offerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html'
        })
        .state('old', {
            url: '/old',
            templateUrl: 'views/oldAge.html'
        })
        .state('mid', {
            url: '/mid',
            templateUrl: 'views/middleAge.html'
        })
        .state('teen', {
            url: '/teen',
            templateUrl: 'views/teenager.html'
        })
        .state('applyCard', {
              url: '/applyCard',
              templateUrl: 'views/form.html',
              controller: 'dynamicFormController as vm'
        })
>>>>>>> da47528bf8a2fec8b164936f2740f119297b4341
});
