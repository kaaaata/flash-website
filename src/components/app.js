angular.module('flash-site')
.component('app', {
  controller: function() {

    this.data = window.to6(window.data);
    this.activeGameName = this.data[0][1].name;
    this.activeGameSrc = 'public/swf/' + this.activeGameName + '.swf';
    this.tags = ['By Kat & Friends', 'Shooting', 'Strategy', 'RPG', 'Stick', 'Arcade'];
    this.showGame = true;

    this.clickNavbarEntry = function() {
      //make filter of all game
    };
    this.toggleShowGame = () => {
      this.showGame = !this.showGame;
      if (this.showGame) this.loadGame();
    };
    this.clickGame = (name) => {
      this.activeGameName = name;
      this.activeGameSrc = 'public/swf/' + this.activeGameName + '.swf';
      if (this.showGame) this.loadGame();
    };
    this.loadGame = () => {
      document.getElementById('activeGame').innerHTML = 
        '<center><embed src="' + this.activeGameSrc + '" /></center>';
    };
    this.fullscreen = () => {
      
    };

    this.$onInit = () => {
      console.log('angular sucks');
    };
  },
  templateUrl: 'src/templates/app.html'
});