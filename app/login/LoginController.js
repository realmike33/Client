angular.module('Daas.login', [])

.controller('LoginController', function($scope, $state, Auth){
  $scope.login = function(){
    if($scope.username && $scope.password){
  	 var obj = {};
  	 obj.username = $scope.username;
  	 obj.password = $scope.password
  	 console.log(obj);	
  	}else{
      console.log('fucked');
    }
  }
});