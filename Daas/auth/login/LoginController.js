angular.module('Daas.auth.login', [])

.controller('LoginController', function($http, $scope, $state, $window, $interval){
  // $scope.login = function(){
  //   if($scope.username && $scope.password){
  // 	 var obj = {};
  // 	 obj.username = $scope.username;
  // 	 obj.password = $scope.password
  // 	 console.log(obj);
  // 	}else{
  //     console.log('fucked');
  //   }
  // };

  // $scope.loginFacebook = Auth.facebookLogin;

  $scope.loginFacebook = function(){
    var windowFeatures = 'location=0,status0,modal=yes,alwaysRaised=yes,width=800,height=600';
    var windowObjectReference = $window.open('http://spectreswag.herokuapp.com/api/fb/facebook', 'AuthWindow', windowFeatures);
    var closed = $interval(function(){
      if(windowObjectReference.closed){
        console.log('closed');
        $interval.cancel(closed);
      }
    }, 500);
  };
});
