var stageState = {};

stageState.create = function(){
  background = game.add.sprite(0,0,"sky","sky.png");
  player = {health:30,
            damage:1,
            name:"player"};
  player.star = game.add.sprite(50,game.height/2,"star","star.png");
  enemy = {health:10,
            damage:1,
            name:"notCoolBro"};
  enemy.diamond = game.add.sprite(game.width-200,game.height/2,"diamond","diamond.png");
  player.status = game.add.text(player.star.x,player.star.y-150, player.name + "\nhealth:" + player.health,
                {font:'30px Courier', fill: '#fff'});
  var tween = game.add.tween(player.star)
              .to({y:(game.height/2)-50},1000,"Linear",false)
              .to({y:(game.height/2)},1000,"Cubic",true)
              .loop(true);
  player.status = game.add.text(enemy.diamond.x,enemy.diamond.y-150, enemy.name + "\nhealth:" + enemy.health,
                {font:'30px Courier', fill: '#fff'});
  var tween2 = game.add.tween(enemy.diamond)
              .to({y:(game.height/2)+50},1000,"Linear",false)
              .to({y:(game.height/2)},1000,"Cubic",true)
              .loop(true);

};
stageState.update = function(){


}
