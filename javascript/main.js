var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [loaderSceneConfig, menuSceneConfig, loseSceneConfig, winSceneConfig, gameSceneConfig]
};

var game = new Phaser.Game(config);
