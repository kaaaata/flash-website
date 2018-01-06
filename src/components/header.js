angular.module('flash-site')
.component('header', {
  controller: function() {

  },
  bindings: {
    tags: '<',
    clickNavbarEntry: '<'
  },
  
  templateUrl: 'src/templates/header.html'
});
