'use strict';

angular.module('bspAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('werkgevers.edit', {
        url: '/:id/edit',
        templateUrl: 'app/werkgevers/edit/werkgever.edit.html',
        controller: 'WerkgeversWerkgeverEditCtrl'
      });
  });