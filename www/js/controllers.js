angular.module('starter.controllers', [])

.controller('ParametreCtrl', function($scope) {
})

.controller('ComptesCtrl', function($scope, Comptes) {
  $scope.comptes = Comptes.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Comptes) {
  $scope.compte = Comptes.get($stateParams.compteId);
})

.controller('ObjectifCtrl', function($scope) {
})

.controller('TabsCtrl', function($scope, $state) {
  $scope.signIn = function() {
     $state.go('tab.dash');
  };

  $scope.signOut = function() {
     $state.go('teerleer');
  };
});
