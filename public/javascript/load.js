var loadState = {};

loadState.preload = function(){
  var loadingLab = game.add.text(80,150, "I WORK!...",{font:'30px Courier', fill: '#fff'});
  game.load.atlasJSONHash("sky","assets/spritesheet.png","assets/spritesheet.json");
};

loadState.create = function(){
  game.stage.setBackgroundColor('#000');
  game.state.start('stage',true,false);
};
