'use strict';

describe('Controller: WerknemersWerknemerEditCtrl', function () {

  // load the controller's module
  beforeEach(module('bspAppApp'));

  var WerknemersWerknemerEditCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WerknemersWerknemerEditCtrl = $controller('WerknemersWerknemerEditCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
