angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('TabsCtrl', function($scope, $state) {
  $scope.signIn = function() {
     $state.go('tab.dash');
  };

  $scope.signOut = function() {
     $state.go('teerleer');
  };
});
