'use strict';

angular.module('bspAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('werknemers/werknemer.list', {
        url: '/werknemers',
        templateUrl: 'app/werknemers/list/werknemer.list.html',
        controller: 'WerknemersWerknemerListCtrl'
      });
  });