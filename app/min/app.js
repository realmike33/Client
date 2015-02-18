var app = angular.module('Daas', [
  'ui.router',
  'Daas.home',
  'Daas.login',
  'Daas.signup',
  'Daas.dashboardDirective'
  ])

.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/home.html',
      controller: 'HomeController'
    })
    .state('login', {
      url:'/login',
    	templateUrl: 'login/login.html',
      controller: 'LoginController'
    })
    .state('signup', {
      url:'/signup',
      templateUrl: 'signup/signup.html',
      controller: 'SignupController'
    })
    .state('examples', {
      url: '/examples',
      templateUrl: 'example/example.html'
    })
    .state('dashboardCreator', {
      url: '/dashCreator',
      templateUrl: 'dashboardCreator/dash-template.html'
    });
  $urlRouterProvider.otherwise('/');
}]);
