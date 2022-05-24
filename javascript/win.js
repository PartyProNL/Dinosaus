var winSceneConfig = {
    key: 'win',
    active: false,
    visible: false,
    create: create,
    update: update
};

function create() {
  var naamLabel = this.add.text(80,80, 'Je hebt gewonnen',{font: '50px Arial', fill: '#ffffff'});
  var menuLabel = this.add.text(80, 160, 'Druk op W om terug te gaan naar het menu', {font: '25px Arial', fill: '#00ff00'});
  WKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
}

function update() {
  if (WKey.isDown){
    this.scene.start('menu');
  }
}
