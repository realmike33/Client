angular.module('Daas', [
  'ui.router',
  'Daas.auth',
  'Daas.main'
  ])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'main/main.html',
    })
    .state('auth', {
      url: '/auth/login',
      templateUrl: 'auth/auth.html',
    })
  // $urlRouterProvider.otherwise('/');
});
