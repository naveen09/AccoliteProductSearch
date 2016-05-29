'use strict';

/**
 * @ngdoc overview
 * @name accohubApp
 * @description
 * # accohubApp
 *
 * Main module of the application.
 */
angular
  .module('accohubApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('/', {
        url: '/',
        views :{
          "header": { templateUrl: "../views/header.html"},
          "sidenav": { templateUrl: "../views/sidenav.html", controller: 'searchCtrl', controllerAs: 'vm'},
          "content": { templateUrl: "../views/content.html", controller: 'searchCtrl', controllerAs: 'vm'}
        }
      })

  });
