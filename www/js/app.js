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
      ionic.Platform.fullScreen();
      // org.apache.cordova.statusbar required
      //StatusBar.styleDefault();
      StatusBar.hide();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.pets', {
      url: '/pets',
      views: {
        'tab-pets': {
          templateUrl: 'templates/tab-pets.html',
          controller: 'PetsCtrl'
        }
      }
    })

    .state('tab.pet-detail',{
      url: '/pet/:petId',
      views:{
        'tab-pets':{
          templateUrl: 'templates/pet-detail.html',
          controller: 'PetDetailCtrl'
        }
      }
    })

    .state('tab.news', {
      url: '/news',
      views: {
        'tab-news': {
          templateUrl: 'templates/tab-news.html',
          controller: 'NewsCtrl'
        }
      }
    })
    .state('tab.news-detail', {
      url: '/new/:newId',
      views: {
        'tab-news': {
          templateUrl: 'templates/new-detail.html',
          controller: 'NewDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/pets');

});

