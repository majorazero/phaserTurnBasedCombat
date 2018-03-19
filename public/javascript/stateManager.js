var game = new Phaser.Game(800,600,Phaser.CANVAS,'gameContainer');

game.state.add('boot',bootState);
game.state.add('load',loadState);
game.state.add("stage",stageState);

game.state.start('boot',true,false);
