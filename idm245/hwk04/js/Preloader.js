gameObj.Preloader = function (game) {};

gameObj.Preloader.prototype = {
  preload: function () {
    console.log("State - Preloader");


    this.load.image('background', 'assets/background.png');

    this.load.image('city', 'assets/city.png');

    this.load.image('healthbar', 'assets/healthbar.png');

    this.load.image('rock1', 'assets/rock1.png');

    this.load.image('rock2', 'assets/rock2.png');

    this.load.image('rock3', 'assets/rock3.png');

    this.load.image('contact', 'assets/contact.png');

    this.load.image('background', 'assets/background.png');

    this.load.spritesheet('backButton', 'assets/backarrow3.png', 85, 0);

    this.load.image('trophy', 'assets/trophy.png');

    this.load.image('checkmark', 'assets/checkmark.png');

    this.load.image('redx', 'assets/redx.png');

    this.load.image('city', 'assets/city.png');

    this.load.image('fire', 'assets/fire.png');

    this.load.image('smoke', 'assets/smoke.png');

    this.load.spritesheet('playButton', 'assets/startbutton.png', 192, 0);

    this.load.spritesheet('replayButton', 'assets/replaybutton.png', 67, 0);

    this.load.spritesheet('homeButton', 'assets/homebutton.png', 196, 0);

    this.load.spritesheet('helpButton', 'assets/helpbutton.png', 196, 0);

    
  },
  create: function () {
	this.state.start('Main');
  }
};