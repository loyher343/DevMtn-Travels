angular
.module("devmtnTravel")
.controller("bookedCtrl", function($scope, $stateParams, mainSrv) {
  $scope.package = mainSrv.packageInfo.find(function(cur) {
    return cur.city == $stateParams.city;
  });
  $scope.myStyle = {
    background: "url(" + $scope.package.image + ")",
    "background-size": "cover",
    "background-position": "center center"
  };
});