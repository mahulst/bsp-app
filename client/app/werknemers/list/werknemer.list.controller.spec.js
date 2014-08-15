'use strict';

describe('Controller: WerknemersWerknemerListCtrl', function () {

  // load the controller's module
  beforeEach(module('bspAppApp'));

  var WerknemersWerknemerListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WerknemersWerknemerListCtrl = $controller('WerknemersWerknemerListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
