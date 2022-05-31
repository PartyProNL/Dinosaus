var menuSceneConfig = {
    key: 'menu',
    active: false,
    visible: false,
    create: mainCreate,
    update: mainUpdate
};

var EKey = null;
var IKey = null;
function mainCreate() {
  var naamLabel = this.add.text(80,80, 'Dinosaus',{font: '50px Arial', fill: '#ffffff'});
  var startLabel = this.add.text(80, 160, 'Druk op E om te starten', {font: '25px Arial', fill: '#00ff00'});
  var helpLabel = this.add.text(80, 240, 'Druk op I voor info', {font: '25px Arial', fill: '#ff0000'});
  if(EKey == null) EKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
  if(IKey == null) IKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
}

function mainUpdate() {
  if (EKey.isDown && this.scene.key == "menu"){
    EKey.isDown = false;
    this.scene.start('game');
  }

  if (IKey.isDown && this.scene.key == "menu"){
    IKey.isDown = false;
    this.scene.start('info');
  }
}
