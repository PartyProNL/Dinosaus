var gameSceneConfig = {
    key: 'game',
    active: false,
    visible: false,
    create: create,
    update: update
};

function create() {
  var scoreLabel = this.add.text(400,40, '0',{font: '50px Arial', fill: '#ffffff'});
}

function update() {

}
