angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$window) {
  console.log($window.innerHeight);
  $scope.mapElementStyle={'height':$window.innerHeight+"px",'width':$window.innerWidth+"px"};
  // $scope.mapElementStyle={'height':"100%",'width':"100%"};
  $scope.drawMap=function(){
    mapboxgl.accessToken = "pk.eyJ1IjoidC0iLCJhIjoiOVJmanJQSSJ9.diLPpltdxIrTznHeZrxsGA";
    var map = new mapboxgl.Map({
      container: 'mymap',
      zoom: 14.35,
      center: [51.533895, 9.934131],
      style: 'js/style.json',
      hash: true
    });
  };
})

.controller('COLORSCtrl', function($scope, COLORS) {
  $scope.colorList = COLORS.all();
})

.controller('AccountCtrl', function($scope) {
});