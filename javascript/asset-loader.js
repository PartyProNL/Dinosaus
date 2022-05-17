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
  this.load.image("dino", "assets/character/pixil-frame-1.png");
}

function create() {
  this.scene.launch('menu');
}

// class AssetLoader {
//   assetsLocation;
//   main;
//
//   assetsToLoad = ["ground.png", "cactus.png", "dinosaur.png"];
//
//   constructor(assetsLocation, main) {
//     this.assetsLocation = assetsLocation;
//     this.main = main;
//   }
//
//   loadImage(name) {
//     this.main.load.image(name, this.assetsLocation+"/"+name);
//   }
//
//   loadAssets() {
//     console.log("Loading assets...");
//
//     for(let i = 0; i < this.assetsToLoad.length; i++) {
//       this.loadImage(this.assetsToLoad[i]);
//     }
//   }
// }
