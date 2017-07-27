angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('reminder', {
        url: '',
        templateUrl: 'views/main.html',
        controller: 'ReminderController'
      });

    $urlRouterProvider.otherwise('reminder');
  }]);
