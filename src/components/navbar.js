angular.module('flash-site')
.component('navbar', {
  controller: function() {

  },
  bindings: {
    tags: '<',
    clickNavbarEntry: '<'
  },
  
  templateUrl: 'src/templates/navbar.html'
});
