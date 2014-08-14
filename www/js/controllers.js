angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.myData = {};
  $scope.$watch(function(){
         return $window.innerWidth;
      }, function(value) {
         console.log(value);
     });
  $scope.myData.doClick = function() {
    mapboxgl.accessToken = "pk.eyJ1IjoidC0iLCJhIjoiOVJmanJQSSJ9.diLPpltdxIrTznHeZrxsGA";
    var map = new mapboxgl.Map({
        container: 'mymap',
        zoom: 14.35,
        center: [51.533895, 9.934131],
        style: 'js/style.json',
        hash: true
    });
    map.addControl(new mapboxgl.Navigation());
  };
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});