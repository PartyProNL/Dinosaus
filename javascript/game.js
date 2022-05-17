var gameSceneConfig = {
    key: 'game',
    physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
    },
    active: false,
    visible: false,
    create: create,
    update: update
};

function create() {
  var scoreLabel = this.add.text(400,40, '0',{font: '50px Arial', fill: '#ffffff'});

  // Creating the ground
  var platforms = this.physics.add.staticGroup();
  platforms.create(400, 568, 'ground').setScale(2).refreshBody();

  // Creating a player
  player = this.physics.add.sprite(100, 450, 'dino');

  player.setBounce(0.2);
  this.physics.add.collider(player, platforms);
  player.body.setGravityY(300)
}

function update() {

}
