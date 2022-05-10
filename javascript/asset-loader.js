class AssetLoader {
  assetsLocation;
  main;

  assetsToLoad = ["ground.png", "cactus.png", "dinosaur.png"];

  constructor(assetsLocation, main) {
    this.assetsLocation = assetsLocation;
    this.main = main;
  }

  loadImage(name) {
    this.main.load.image(name, this.assetsLocation+"/"+name);
  }

  loadAssets() {
    console.log("Loading assets...");

    for(let i = 0; i < this.assetsToLoad.length; i++) {
      this.loadImage(this.assetsToLoad[i]);
    }
  }
}
