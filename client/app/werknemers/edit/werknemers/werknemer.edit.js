'use strict';

angular.module('bspAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('werknemers/werknemer.edit', {
        url: '/werknemers/edit',
        templateUrl: 'app/werknemers/edit/werknemer.edit.html',
        controller: 'WerknemersWerknemerEditCtrl'
      });
  });