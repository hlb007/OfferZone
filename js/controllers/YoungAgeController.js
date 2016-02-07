(
  function(){
    'use strict'
    angular.module('offerApp')
            .controller('YoungAgeController',YoungAgeController);
            YoungAgeController.$inject = ['$scope', 'viewPath', '$state'];
             function YoungAgeController($scope, viewPath, $state){
                var vm = this;
                vm.views = viewPath;
              }
  })();
