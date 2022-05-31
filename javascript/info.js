var infoSceneConfig = {
    key: 'info',
    active: false,
    visible: false,
    create: infoCreate,
    update: infoUpdate
};

var QKey = null;
function infoCreate() {
  var naamLabel = this.add.text(80,80, 'Instructies',{font: '50px Arial', fill: '#ffffff'});
  this.add.text(80,150, 'Ontwijk de cactussen door te springen met W.',{font: '25px Arial', fill: '#ffffff'});
  this.add.text(80,190, 'Ga sneller naar beneden met S.',{font: '25px Arial', fill: '#ffffff'});
  this.add.text(80,230, 'Pak powerups op voor extra bescherming.',{font: '25px Arial', fill: '#ffffff'});
  this.add.text(80,270, 'Haal een score van 2500 om te winnen.',{font: '25px Arial', fill: '#ffffff'});
  var menuLabel = this.add.text(160, 550, 'Druk op Q om terug te gaan naar het menu', {font: '25px Arial', fill: '#ffffff'});
  if(QKey == null) QKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
}

function infoUpdate() {
  if (QKey.isDown && this.scene.key == "info") {
    QKey.isDown = false;
    this.scene.start('menu');
  }
}
