angular.module('flash-site')
.component('mainframe', {
  bindings: {
    'gameMode': '<',
    'activeGame': '<'
  },
  controller: function() {
    this.$onInit = () => 
      {console.log()};
  },	
  
  templateUrl: 'src/templates/mainframe.html'
});
