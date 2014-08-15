'use strict';

describe('Controller: WerkgeversWerkgeverEditCtrl', function () {

  // load the controller's module
  beforeEach(module('bspAppApp'));

  var WerkgeversWerkgeverEditCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WerkgeversWerkgeverEditCtrl = $controller('WerkgeversWerkgeverEditCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
