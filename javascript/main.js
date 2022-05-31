var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [loaderSceneConfig, menuSceneConfig, loseSceneConfig, winSceneConfig, gameSceneConfig, infoSceneConfig]
};

var game = new Phaser.Game(config);
