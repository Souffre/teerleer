// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // landing page
  .state('teerleer', {
    url: "/teerleer",
    templateUrl: "templates/teerleer.html"
  })

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html",
      controller: 'TabsCtrl'
    })

    // Each tab has its own nav history stack:

    .state('tab.comptes', {
      url: '/comptes',
      views: {
        'tab-comptes': {
          templateUrl: 'templates/tab-comptes.html',
          controller: 'ComptesCtrl'
        }
      }
    })

    .state('tab.objectif', {
      url: '/objectif',
      views: {
        'tab-objectif': {
          templateUrl: 'templates/tab-objectif.html',
          controller: 'ObjectifCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-comptes': {
          templateUrl: 'templates/comptes-detail.html',
          controller: 'ComptesDetailCtrl'
        }
      }
    })

    .state('tab.parametre', {
      url: '/parametre',
      views: {
        'tab-parametre': {
          templateUrl: 'templates/tab-parametre.html',
          controller: 'ParametreCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/teerleer');

});
