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
var items = null
var game = null;

function create() {
  // Resetten van variabelen (wordt niet automatisch gedaan bij starten scene)
  WKey = null;
  SKey = null;
  currentTime = 0;
  secondsTimer = 0;
  secondsPassed = 0;
  scoreLabel = null;
  cactusses = null;
  cactusSpeed = 1.0;
  cactusY = 390;
  leftUntilSpawn = 0;
  leftUntilItemSpawn = Math.random() * 5 + 15
  ninjaHitsLeft = 0;
  game = this;

  // De achtergrond toevoegen
  var image = this.add.image(400, 300, 'background');
  image.setScale(2);

  // Score renderen (na de achtergrond zodat hij erop staat)
  scoreLabel = this.add.text(30,20, 'SCORE 0',{font: '45px ARCADECLASSIC', fill: '#ffffff'});

  // De grond maken
  var platforms = this.physics.add.staticGroup();
  platforms.create(400, 600-96, 'ground').setScale(2).refreshBody();

this.anims.create({
            key: 'ground-move',
            frames: [
                { key: 'ground1' },
                { key: 'ground2' },
                { key: 'ground3' },
                { key: 'ground4' },
                { key: 'ground5' },
                { key: 'ground6' },
                { key: 'ground7' },
                { key: 'ground8' },
                { key: 'ground9' },
                { key: 'ground10' },
                { key: 'ground11' },
                { key: 'ground12' },
                { key: 'ground13' },
                { key: 'ground14' },
                { key: 'ground15' },
                { key: 'ground16' },
                { key: 'ground17' },
                { key: 'ground18' },
                { key: 'ground19' },
                { key: 'ground20' },
                { key: 'ground21' },
                { key: 'ground22' },
            ],
            framerate:12,
            repeat: -1
  });

platforms.children.iterate(function(child){
  child.play('ground-move');
});

  // De speler maken
  this.anims.create({
            key: 'dino-run',
            frames: [
                { key: 'trex1' },
                { key: 'trex2' },
                { key: 'trex3' },
                { key: 'trex4', duration: 50 }
            ],
            frameRate: 12,
            repeat: -1
        });

  this.anims.create({
    key: 'ninja-run',
    frames: [
      { key: 'ninja1' },
      { key: 'ninja2' },
      { key: 'ninja3' },
      { key: 'ninja4' },
      { key: 'ninja5' },
      { key: 'ninja6' },
      { key: 'ninja7' },
      { key: 'ninja8', duration: 50 }
    ],
    frameRate: 12,
    repeat: -1
  });

  this.anims.create({
    key: 'laser-run',
    frames: [
      { key: 'laser1' },
      { key: 'laser2' },
      { key: 'laser3' },
      { key: 'laser4' },
      { key: 'laser5' },
      { key: 'laser6' },
      { key: 'laser7' },
      { key: 'laser8' },
      { key: 'laser9' },
      { key: 'laser10' },
      { key: 'laser11' },
      { key: 'laser12' },
      { key: 'laser13' },
      { key: 'laser14', duration: 50 }
    ],
    frameRate: 12,
    repeat: -1
  });

  player = this.physics.add.sprite(100, 600-200, 'trex1')
            .play('dino-run');
  //player = this.physics.add.sprite(100, 600-200, 'dino');

  player.setScale(2.3);
  player.setBounce(0);
  this.physics.add.collider(player, platforms);
  player.body.setGravityY(1000)

  // De group aanmaken voor de cactussen
  cactusses = this.physics.add.group();
  this.physics.add.collider(cactusses, platforms);
  this.physics.add.collider(player, cactusses, function(obj1, obj2){hitCactus(obj1, obj2);}, null, this);

  // De group aanmaken voor de items
  items = this.physics.add.group({
        immovable: true,
        allowGravity: false
    });
  this.physics.add.collider(player, items, function(obj1, obj2){hitItem(obj1, obj2);}, null, this)

  // De W toets registreren om later te gebruiken voor het springen
  WKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  SKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
}

function update(time, delta) {
  // Updaten van tijd waar de game momenteel op is
  currentTime += delta;

  // Score updaten
  var score = parseInt(currentTime/100);
  scoreLabel.setText("SCORE "+score);

  if(score >= 25) {
    this.scene.start('win');
  }

  // Speed langzaam verhogen
  cactusSpeed += 0.00001 * delta;

  // Alle cactussen laten bewegen
  cactusses.children.iterate(function(child) {
    child.x -= (cactusSpeed/delta) * 100;
  })

  // Alle items laten bewegen
  items.children.iterate(function(child) {
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
var leftUntilItemSpawn = 0;
var spawnedItemType = "";
function updateSecond() {
  leftUntilSpawn--;

  if(leftUntilSpawn <= 0) {
    spawnCactus();
    leftUntilSpawn = Math.random() * 3 + 1;
  }

  leftUntilItemSpawn--;
  if(leftUntilItemSpawn <= 0) {
    spawnItem();
    leftUntilItemSpawn = Math.random() * 5 + 15
  }

  if(laserTimeLeft > 0) {
    laserTimeLeft--;
    cactusses.clear(true, true);
    if(laserTimeLeft <= 0) {
      if(ninjaHitsLeft <= 0) {
        player.play('dino-run');
      } else {
        player.play('ninja-run');
      }
    }
  }
}

var itemY = 200;
var itemTypes = ["ninja", "laser"]
function spawnItem() {
  var itemType = itemTypes[Math.floor(Math.random()*itemTypes.length)];
  spawnedItemType = itemType;
  var item = items.create(800, itemY, itemType);
  item.setScale(2.7);
}

function hitItem(player, item) {
  if(spawnedItemType == "ninja") {
    item.destroy();
    ninjaHitsLeft = 3;
    player.play('ninja-run');
  }

  if(spawnedItemType == "laser") {
    item.destroy();
    laserTimeLeft = 5;
    cactusses.clear(true, true);
    player.play('laser-run');
  }
}

var laserTimeLeft = 0;
var ninjaHitsLeft = 0;
function hitCactus(player, cactus) {
  if(ninjaHitsLeft > 0) {
    ninjaHitsLeft--;
    cactus.destroy();

    if(ninjaHitsLeft <= 0) {
      player.play('dino-run');
    }
  } else {
    gameOver = true;
    var score = parseInt(currentTime/100);
    game.scene.start('lose', {score:score});
  }
}

var cactusSpeed = 1.0;
var cactusY = 390;
function spawnCactus() {
  var randomNumber = Math.floor(Math.random() * 9);
  var texture = 'cactus';
  if(randomNumber == 5) {
    texture = 'sombrero';
  }

  var cactus = cactusses.create(800, cactusY, texture);
  cactus.setScale(2.7);
}
