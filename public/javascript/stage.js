var stageState = {};

stageState.create = function(){
  background = game.add.sprite(0,0,"sky","sky.png");
  star = game.add.sprite(50,game.height/2,"star","star.png");
  var tween = game.add.tween(star)
              .to({y:(game.height/2)-50},1000,"Linear",false)
              .to({y:(game.height/2)},1000,"Cubic",true)
              .loop(true);
  diamond = game.add.sprite(game.width-200,game.height/2,"diamond","diamond.png");
  var tween2 = game.add.tween(diamond)
              .to({y:(game.height/2)+50},1000,"Linear",false)
              .to({y:(game.height/2)},1000,"Cubic",true)
              .loop(true);
};
