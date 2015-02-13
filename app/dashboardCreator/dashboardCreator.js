(function(){
  angular.module('Daas.dashboardDirective', [])

  .directive('pTag', function(){
    var template = '<p>hello</p>'
    return {
      restrict: 'E',
      template: template
    }
  })
  .directive('divTag', function(){
    var template = '<div>Hi<span>Yo<span></div>'
    return {
      restrict: 'E',
      template: template
    }
  })
  .directive('buttonTag', function(){
    var template = '<button>Hello</button>'
    return {
      restrict: 'E',
      template: template
    }
  });
})();
