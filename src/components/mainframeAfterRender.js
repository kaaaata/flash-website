angular.module('flash-site')
.component('mainframeAfterRender', {
  bindings: {
    'loadGame': '<'
  },
  controller: function() {
    this.$onInit = () => {
      this.loadGame();
    };
  },	
  
  templateUrl: 'src/templates/mainframeAfterRender.html'
});