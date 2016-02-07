(
  function(){
    'use strict'
    angular.module('offerApp')
            .controller('LoginController',LoginController);
            LoginController.$inject = ['$scope', 'viewPath', 'LoginService', '$state'];
             function LoginController($scope, viewPath, LoginService, $state){
                var vm = this;
                vm.views = viewPath;
                vm.errorClass = false;
                vm.loginpage = true;
                vm.sigIn = function(){
                  var loginPromise = LoginService.validateCreds(vm.username, vm.pass);
                  loginPromise.then(function(data){
                    if(data && data !== 'error'){
                      $state.go(data);
                    }
                    else{
                      vm.errorClass = true;
                    }
                  },function(data){
                    vm.errorClass = true;
                  });
                };

              }
  })();
