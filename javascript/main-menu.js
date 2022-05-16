var menuSceneConfig = {
    key: 'menu',
    active: false,
    visible: false,
    create: create,
    update: update
};

function create() {
  var naamLabel = this.add.text(80,80, 'Dinosaus',{font: '50px Arial', fill: '#ffffff'});
  var startLabel = this.add.text(80, 160, 'Druk op W om te starten', {font: '25px Arial', fill: '#00ff00'});
  var helpLabel = this.add.text(80, 240, 'Druk op I voor info', {font: '25px Arial', fill: '#ff0000'});
  WKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  IKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
}

function update() {
  if (WKey.isDown){
    this.scene.start('game');
  }
  if (IKey.isDown){
    this.scene.start('help');
  }
}
