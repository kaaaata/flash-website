angular.module('flash-site')
.component('games', {
  bindings: {
    data: '<',
    clickGame: '<'
  },
  controller: function() {
  	console.log(data);
  },
  
  templateUrl: 'src/templates/games.html'
});
