'use strict';

angular.module('bspAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('werknemers/werknemer.view', {
        url: '/werknemers/view',
        templateUrl: 'app/werknemers/view/werknemer.view.html',
        controller: 'WerknemersWerknemerViewCtrl'
      });
  });