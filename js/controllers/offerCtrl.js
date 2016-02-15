(function() {
    'use strict'
    angular.module('offerApp')
        .controller('offerCtrl', offerCtrl);
    offerCtrl.$inject = ['$scope', '$rootScope', '$http','$state','$stateParams'];

    function offerCtrl($scope, $rootScope, $http, $state, offerParams) {
        var vm = this;
        var offerParams = angular.fromJson(offerParams.offerParams);
        console.log("Offer Values offerctrl",offerParams);
        function getRefData(getURL) {
            $http({
                method: "GET",
                url: getURL,
            }).then(function(data) {
                console.log(data);
                vm.data = data.data;
                console.log("vm", vm);
            });
        };
    }
})();
