'use strict';

angular.module('bspAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('werkgevers', {
        url: '/werkgevers',
        templateUrl: 'app/werkgevers/list/werkgever.list.html',
        controller: 'WerkgeversWerkgeverListCtrl'
      });
  });