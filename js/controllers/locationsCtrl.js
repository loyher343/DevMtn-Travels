angular.module('devmtnTravel').controller('locationsCtrl',function($scope, mainSrv){
    $scope.travelInfo = mainSrv.travelInfo;
    $scope.packageInfo = mainSrv.packageInfo
})