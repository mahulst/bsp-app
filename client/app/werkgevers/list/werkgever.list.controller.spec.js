'use strict';

describe('Controller: WerkgeversWerkgeverListCtrl', function () {

  // load the controller's module
  beforeEach(module('bspAppApp'));

  var WerkgeversWerkgeverListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WerkgeversWerkgeverListCtrl = $controller('WerkgeversWerkgeverListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
