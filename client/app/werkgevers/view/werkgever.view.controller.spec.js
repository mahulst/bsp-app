'use strict';

describe('Controller: WerkgeversWerkgeverViewCtrl', function () {

  // load the controller's module
  beforeEach(module('bspAppApp'));

  var WerkgeversWerkgeverViewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WerkgeversWerkgeverViewCtrl = $controller('WerkgeversWerkgeverViewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
