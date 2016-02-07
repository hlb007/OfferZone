(
  function(){
    'use strict'
    angular.module('offerApp')
            .controller('OldAgeController',OldAgeController);
            OldAgeController.$inject = ['$scope', 'viewPath', '$state'];
             function OldAgeController($scope, viewPath, $state){
                var vm = this;
                vm.views = viewPath;
              }
  })();
