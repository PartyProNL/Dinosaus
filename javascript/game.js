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

var WKey = null;
var SKey = null;
var currentTime = 0;
var secondsTimer = 0;
var secondsPassed = 0;
var scoreLabel = null;
var cactusses = null;

function create() {
  // De achtergrond toevoegen
  var image = this.add.image(400, 300, 'background');
  image.setScale(2);

  // Score renderen (na de achtergrond zodat hij erop staat)
  scoreLabel = this.add.text(30,20, 'SCORE 0',{font: '45px ARCADECLASSIC', fill: '#ffffff'});

  // De grond maken
  var platforms = this.physics.add.staticGroup();
  platforms.create(400, 600-96, 'ground').setScale(2).refreshBody();

  // De speler maken
  player = this.physics.add.sprite(100, 600-200, 'dino');

  player.setScale(2.3);
  player.setBounce(0);
  this.physics.add.collider(player, platforms);
  player.body.setGravityY(1000)

  // De group aanmaken voor de cactussen
  cactusses = this.physics.add.group();
  this.physics.add.collider(cactusses, platforms);
  this.physics.add.collider(player, cactusses, hitCactus, null, this);

  // De W toets registreren om later te gebruiken voor het springen
  WKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  SKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
}

function update(time, delta) {
  // Updaten van tijd waar de game momenteel op is
  currentTime += delta;

  // Score updaten
  scoreLabel.setText("SCORE "+parseInt(currentTime/100));

  // Speed langzaam verhogen
  cactusSpeed += delta/100000;

  // Alle cactussen laten bewegen
  cactusses.children.iterate(function(child) {
    child.x -= (cactusSpeed/delta) * 100;
  })

  // Updaten van een timer die elke seconde geactiveerd wordt
  secondsTimer += delta;
  while (secondsTimer >= 1000) {
    secondsTimer -= 1000;
    secondsPassed++;
    updateSecond();
  }

  // Spring functionaliteit
  if (WKey.isDown && player.body.touching.down){
    player.setVelocityY(-800);
  }

  // Duik functionaliteit
  if (SKey.isDown && !player.body.touching.down){
    let velocity = player.body.velocity;
    player.setVelocityY(velocity.y + 2.5*delta);
  }
}

var leftUntilSpawn = 0;
function updateSecond() {
  leftUntilSpawn--;

  if(leftUntilSpawn <= 0) {
    spawnCactus();
    leftUntilSpawn = Math.floor(Math.random() * 3) + 1;
  }
}

function hitCactus() {
  this.physics.pause();
  player.setTint(0xff0000);
  gameOver = true;
}

var cactusSpeed = 1.0;
var cactusY = 390;
function spawnCactus() {
  console.log("Cactus wordt gespawned");

  var cactus = cactusses.create(800, cactusY, 'cactus');
  cactus.setScale(2.7);
}
