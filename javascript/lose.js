var loseSceneConfig = {
    key: 'lose',
    active: false,
    visible: false,
    create: create,
    update: update
};

function create(data) {
  var score = data.score;

  var naamLabel = this.add.text(80,80, 'Je hebt verloren met score ' + score,{font: '50px Arial', fill: '#ffffff'});
  var menuLabel = this.add.text(80, 160, 'Druk op R om terug te gaan naar het menu', {font: '25px Arial', fill: '#00ff00'});
  RKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
}

function update() {
  if (RKey.isDown){
    RKey.isDown = false;
    this.scene.start('menu');
  }
}
