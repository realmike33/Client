angular.module('Daas.auth.service', [])

.factory('Auth', function($http){
  return {

    authLogin: function(url){
    var windowFeatures = 'menubar=no,location=no,width=420,height=230,resizable,scrollbars=no,status=1';
    var windowObjectReference = $window.open('http://spectreswag.herokuapp.com/api/fb/facebook/callback', 'AuthWindow', windowFeatures);
    var closed = $interval(function(){
      if(windowObjectReference.closed){
        console.log('closed');
        $interval.cancel(closed);
      }
    }, 500);
    $http({
      method: 'GET',
      url: 'http://spectreswag.herokuapp.com/api/fb/facebook/callback'
    }).then(function(resp){
      console.log(resp);
     })
    },

    login: function(obj){
      $http({
        method: 'POST',
        url: '',
        data: obj
      }).then(function(resp){
        return resp;
      })
    },
    register: function(obj){
      $http({
        method: 'POST',
        url: '',
        data: obj
      }).then(function(resp){
        return resp;
      })
    },
    logout: function(obj, cb){
      $http({
        method: 'POST',
        url: '',
        data: obj
      }).then(function(resp){
        cb();
      })
    }
  }
});
