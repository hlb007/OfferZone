(function() {
  'use strict'
  angular.module('offerApp')
      .controller('locationCtrl', locationCtrl);
  locationCtrl.$inject = ['$scope', '$location', '$rootScope', 'geolocation', '$http','$state'];
  var showFlag = true;


  function locationCtrl($scope, $location, $rootScope, geolocation, $http, $state) {
    var vm = this;

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


    $scope.openOffer = function(city_id, offer_id){

      var offerParams = angular.toJson({
        "city_id": city_id,
        "offer_id": offer_id
      });
      console.log("city",city_id,"offer",offer_id);
      $state.go('offer', {
        'offerParams': offerParams
      });
    }


    geolocation.getLocation().then(function(data) {
      console.log(data);
      $scope.longitude = data.coords.longitude;
      $scope.latitude = data.coords.latitude;
      console.log($scope.longitude, $scope.latitude);
      vm.showFlag = false;
      $http({
        method: "GET",
        //url: RESTHelper.getCardApplicationUrl() + 'theme/res/branch.properties',
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + $scope.latitude + ',' + $scope.longitude + '&radius=5000&types=city&key=AIzaSyD2ib18iKECClQbRf8kKDiHYxdf1QHksFs'
      }).then(function(data) {
        console.log(data);
        console.log(data.data.results[0].name);
        var name = data.data.results[0].name;
        if (name.toUpperCase().indexOf("SYDNEY") > -1) {
          getRefData("ref-data/location_syd.json");
          console.log(vm);
        } else if (name.toUpperCase().indexOf("MELBOURNE") > -1) {
          getRefData("ref-data/location_melbourne.json");
          console.log(vm);
        } else {
          getRefData("ref-data/location_syd.json");
          console.log(vm);
        }
      }, function() {

      });
    });
  }
})();
