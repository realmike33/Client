angular.module('Daas.auth',[
  'Daas.auth.login',
  'Daas.auth.signup',
  'Daas.auth.service'
  ])


.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login/login.html',
      controller: 'LoginController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'signup/signup.html',
      controller: 'SignupController'
    })
    $urlRouterProvider.otherwise('/login');
})
