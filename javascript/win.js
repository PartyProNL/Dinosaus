var winSceneConfig = {
    key: 'win',
    active: false,
    visible: false,
    create: create,
    update: update
};

function create() {
  var image = this.add.image(400, 300, 'winbackground');
  var menuLabel = this.add.text(160, 570, 'Druk op R om terug te gaan naar het menu', {font: '25px Arial', fill: '#ffffff'});
  RKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
}

function update() {
  if (RKey.isDown){
    RKey.isDown = false;
    this.scene.start('menu');
  }
}
