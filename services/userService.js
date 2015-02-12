app.factory('Auth', function($http){
  return {
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