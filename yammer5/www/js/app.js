
var app = angular.module('starter', ['ionic','ngCordova','starter.controllers'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  if (window.cordova && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  }
  if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.start', {
    url: "/start",
    views: {
      'menuContent': {
        templateUrl: "templates/start.html"
      }
    }
  })
  .state('app.talk', {
    url: "/talk",
    views: {
      'menuContent': {
        templateUrl: "templates/talk.html",
        controller: 'audioController'

      }
    }
  })
  .state('app.picture', {
    url: "/picture",
    views: {
      'menuContent': {
        templateUrl: "templates/picture.html"
      }
    }
  })
  .state('app.move', {
    url: "/move",
    views: {
      'menuContent': {
        templateUrl: "templates/move.html"
      }
    }
  })
  .state('app.send', {
    url: "/send",
    views: {
      'menuContent': {
        templateUrl: "templates/send.html"
      }
    }
  })
  .state('app.finish', {
    url: "/finish",
    views: {
      'menuContent': {
        templateUrl: "templates/finish.html"
      }
    }
  })


  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
  .state('app.playlists', {
    url: "/playlists",
    views: {
      'menuContent': {
        templateUrl: "templates/playlists.html",
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/start');
  });
app.controller('accelController', function($scope){
  document.addEventListener("deviceready", onDeviceReady, false);
  // Cordova is ready
  function onDeviceReady() {

  }
});