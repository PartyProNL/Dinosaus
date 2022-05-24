var loaderSceneConfig = {
    key: 'assetLoader',
    active: true,
    preload: preload,
    create: create
};

function preload() {
  console.log("Loading assets...");

  // Laden van alle foto's
  this.load.image("ground", "assets/environment/ground.png");
  this.load.image("background", "assets/environment/background.png");
  //this.load.image("dino", "assets/character/pixil-frame-1.png");
  this.load.image("cactus", "assets/encounters/cactus.png");

  this.load.path = 'assets/character/';

        this.load.image('trex1', 'trex-frame-1.png');
        this.load.image('trex2', 'trex-frame-2.png');
        this.load.image('trex3', 'trex-frame-3.png');
        this.load.image('trex4', 'trex-frame-4.png');
}

function create() {
  this.scene.launch('menu');
}
