(function() {
  'use strict';

  angular
    .module('app.core', [
      'ngAnimate', 'ngSanitize', 'ngCookies', 'ngResource',
      'blocks.exception', 'blocks.logger', 'blocks.router', 'blocks.user',
      'ui.router', 'ngplus', 'ui.bootstrap', 'angularSpinner', 'blocks.Base64'
    ]);
})();
