angular.module('flash-site')
.component('app', {
  controller: function() {

    this.data = window.to6(window.data);
    this.activeGame = this.data[0][1];
    this.activeGameSrc = 'public/swf/' + this.activeGame.name + '.swf';
    this.tags = ['By Kat & Friends', 'Shooting', 'Strategy', 'RPG', 'Stick', 'Arcade'];
    this.showGame = true;

    this.clickNavbarEntry = function() {
      //make filter of all game
    };
    this.toggleShowGame = () => {
      this.showGame = !this.showGame;
      if (this.showGame === true) {
        this.loadGame();
      }
    };
    this.clickGame = () => {
      console.log('a game was clicked');
    };
    this.loadGame = () => {
      document.getElementById('activeGame').innerHTML = 
        '<center><embed src="' + this.activeGameSrc + '" /></center>';
    };

    this.$onInit = () => {
      console.log('angular sucks');
    };
  },
  templateUrl: 'src/templates/app.html'
});