(function(){

  angular.module('Daas.dashboardDirective', [])

  .directive('pTag', function(){
    return function(scope, element){
      var draggables = Draggable.create('#' + element[0].id, {
            bounds: '#p-container',
            edgeResistance: 0.65,
            type: 'x,y'
          });
        var myDraggable = draggables[0];
        myDraggable.enabled(true);
      }
    });

})();
