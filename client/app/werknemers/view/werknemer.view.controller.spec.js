'use strict';

describe('Controller: WerknemersWerknemerViewCtrl', function () {

  // load the controller's module
  beforeEach(module('bspAppApp'));

  var WerknemersWerknemerViewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WerknemersWerknemerViewCtrl = $controller('WerknemersWerknemerViewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
