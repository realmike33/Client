(function(){
  angular.module('Daas.dashboardDirective', [])

  .directive('pTag', function(){
    var template = '<div id="drag">hello</div>';
    return {
      restrict: 'E',
      template: template,
      controller: function(){
         var draggables = Draggable.create('#drag', {
            bounds: '#p-container',
            edgeResistance: 0.65,
            type: 'x,y'
          });
        var myDraggable = draggables[0];
        myDraggable.enabled(true);
      }
    }
  })
})();
