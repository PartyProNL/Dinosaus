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

this.load.path = 'assets/environment/ground/';

        this.load.image('ground1', 'ground1.png');
        this.load.image('ground2', 'ground2.png');
        this.load.image('ground3', 'ground3.png');
        this.load.image('ground4', 'ground4.png');
        this.load.image('ground5', 'ground5.png');
        this.load.image('ground6', 'ground6.png');
        this.load.image('ground7', 'ground7.png');
        this.load.image('ground8', 'ground8.png');
        this.load.image('ground9', 'ground9.png');
        this.load.image('ground10', 'ground10.png');
        this.load.image('ground11', 'ground11.png');
        this.load.image('ground12', 'ground12.png');
        this.load.image('ground13', 'ground13.png');
        this.load.image('ground14', 'ground14.png');
        this.load.image('ground15', 'ground15.png');
        this.load.image('ground16', 'ground16.png');
        this.load.image('ground17', 'ground17.png');
        this.load.image('ground18', 'ground18.png');
        this.load.image('ground19', 'ground19.png');
        this.load.image('ground20', 'ground20.png');
        this.load.image('ground21', 'ground21.png');
        this.load.image('ground22', 'ground22.png');

}

function create() {
  this.scene.launch('menu');
}
