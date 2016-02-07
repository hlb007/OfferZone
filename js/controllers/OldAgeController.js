(
  function(){
    'use strict'
    angular.module('offerApp')
            .controller('OldAgeController',OldAgeController);
            OldAgeController.$inject = ['$scope', 'viewPath', '$state', '$rootScope'];
             function OldAgeController($scope, viewPath, $state, $rootScope){
                var vm = this;
                vm.views = viewPath;
              }
  })();
