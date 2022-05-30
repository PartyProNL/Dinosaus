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
  this.load.image("sombrero", "assets/encounters/sombrero.png");
  this.load.image('ninja', 'assets/items/ninja.png')
  this.load.image('laser', 'assets/items/laser.png')

  this.load.path = 'assets/character/';

        this.load.image('trex1', 'trex-frame-1.png');
        this.load.image('trex2', 'trex-frame-2.png');
        this.load.image('trex3', 'trex-frame-3.png');
        this.load.image('trex4', 'trex-frame-4.png');

        this.load.image('ninja1', 'ninja1.png');
        this.load.image('ninja2', 'ninja2.png');
        this.load.image('ninja3', 'ninja3.png');
        this.load.image('ninja4', 'ninja4.png');
        this.load.image('ninja5', 'ninja5.png');
        this.load.image('ninja6', 'ninja6.png');
        this.load.image('ninja7', 'ninja7.png');
        this.load.image('ninja8', 'ninja8.png');

        this.load.image('laser1', 'laser1.png');
        this.load.image('laser2', 'laser2.png');
        this.load.image('laser3', 'laser3.png');
        this.load.image('laser4', 'laser4.png');
        this.load.image('laser5', 'laser5.png');
        this.load.image('laser6', 'laser6.png');
        this.load.image('laser7', 'laser7.png');
        this.load.image('laser8', 'laser8.png');
        this.load.image('laser9', 'laser9.png');
        this.load.image('laser10', 'laser10.png');
        this.load.image('laser11', 'laser11.png');
        this.load.image('laser12', 'laser12.png');
        this.load.image('laser13', 'laser13.png');
        this.load.image('laser14', 'laser14.png');
}

function create() {
  this.scene.launch('menu');
}
