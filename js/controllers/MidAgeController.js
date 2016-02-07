(
  function(){
    'use strict'
    angular.module('offerApp')
            .controller('MidAgeController', MidAgeController);
            MidAgeController.$inject = ['$scope', 'viewPath', '$state'];
             function MidAgeController($scope, viewPath, $state){
                var vm = this;
                vm.views = viewPath;
              };
  })();
