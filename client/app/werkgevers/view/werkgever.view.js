'use strict';

angular.module('bspAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('werkgevers.view', {
        url: '/:id',
        templateUrl: 'app/werkgevers/view/werkgever.view.html',
        controller: 'WerkgeversWerkgeverViewCtrl'
      });
  });