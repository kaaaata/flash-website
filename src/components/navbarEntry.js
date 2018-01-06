angular.module('flash-site')
.component('navbarEntry', {
  controller: function() {

  },
  bindings: {
    tag: '<',
    clickNavbarEntry: '<'
  },
  
  templateUrl: 'src/templates/navbarEntry.html'
});
