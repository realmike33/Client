app.factory('Auth', function($http){
  return {
    facebookLogin: function(){
      $http({
        method: 'GET',
        url: 'http://spectreswag.herokuapp.com/api/fb/facebook'
      }).then(function(resp){
        return resp;
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
