var game = new Phaser.Game(1012, 1400, Phaser.CANVAS, 'starofafrika', { preload: preload, create: create, update: update, render: render});

function preload() {	
	game.load.image('map', 'assets/sprites/map.jpg');
	game.load.image('black', 'assets/sprites/black.png');
	game.load.image('pirate', 'assets/sprites/pirate.png');
	game.load.image('star', 'assets/sprites/star.png');
	game.load.image('empty', 'assets/sprites/empty.png');
	game.load.image('ruby', 'assets/sprites/ruby.png');
	game.load.image('topaz', 'assets/sprites/topaz.png');
	game.load.image('emerald', 'assets/sprites/emerald.png');
	game.load.image('horseshoe', 'assets/sprites/horseshoe.png');
	game.load.spritesheet('mummy', 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);
	game.load.spritesheet('coin', 'assets/sprites/coin.png', 32, 32);	
	game.load.spritesheet('dice', 'assets/sprites/diceWhite.png', 64, 64, 6);	
	game.load.spritesheet('button', 'assets/buttons/flixel-button.png', 80, 20);
	game.load.bitmapFont('desyrel', 'assets/fonts/desyrel.png', 'assets/fonts/desyrel.xml');
}

var cursors;
var text;
var	dice;
var	MenuText;
var	map;
var	black;
var	pirate;
var	star;
var	empty;
var	ruby;
var	topaz;
var	emerald;
var	horseshoe;
var	coin;
var	player1;
var	player2
	
function create() {
	game.stage.backgroundColor = '#fff';
	game.world.setBounds(0, 0, 1200, 1400);
	game.input.addPointer();
	
	map = game.add.sprite(0, 0, 'map');
	pirate = game.add.sprite(63, 258, 'pirate');
	pirate = game.add.sprite(70, 591, 'pirate');
	pirate = game.add.sprite(325, 645, 'pirate');
	pirate = game.add.sprite(580, 561, 'pirate');
	pirate = game.add.sprite(755, 481, 'pirate');		
	//star = game.add.sprite(167, 270, 'star');
	empty = game.add.sprite(416, 214, 'empty');
	empty = game.add.sprite(935, 595, 'empty');
	empty = game.add.sprite(786, 626, 'empty');
	empty = game.add.sprite(635, 642, 'empty');
	empty = game.add.sprite(707, 716, 'empty');
	empty = game.add.sprite(453, 488, 'empty');
	empty = game.add.sprite(428, 716, 'empty');
	empty = game.add.sprite(570, 830, 'empty');
	empty = game.add.sprite(412, 861, 'empty');
	//ruby = game.add.sprite(458, 286, 'ruby');
	//ruby = game.add.sprite(625, 423, 'ruby');
	topaz = game.add.sprite(329, 365, 'topaz');
	topaz = game.add.sprite(154, 930, 'topaz');
	topaz = game.add.sprite(425, 1050, 'topaz');
	topaz = game.add.sprite(590, 999, 'topaz');
	emerald = game.add.sprite(237, 474, 'emerald');
	emerald = game.add.sprite(478, 1216, 'emerald');
	emerald = game.add.sprite(216, 637, 'emerald');
	horseshoe = game.add.sprite(20, 487, 'horseshoe');
	horseshoe = game.add.sprite(650, 1090, 'horseshoe');
	horseshoe = game.add.sprite(767, 815, 'horseshoe');
	horseshoe = game.add.sprite(777, 943, 'horseshoe');
	horseshoe = game.add.sprite(902, 987, 'horseshoe');
	horseshoe = game.add.sprite(817, 1111, 'horseshoe');
	
	player1 = game.add.sprite(230, 160, 'mummy');
	player1.animations.add('walk');
	player1.animations.play('walk', 20, true);
	
	text = game.make.text(0, 0, "phaser", { font: "bold 32px Arial", fill: "#000000" });
    text.anchor.set(0.5);
	
	player2 = game.add.sprite(670, 270, 'mummy');
	player2.animations.add('walk');
	player2.animations.play('walk', 20, true);
	
	makeButton('dice', 800, 250);
	
	//  Input Enable the sprites
	player1.inputEnabled = true;
	player2.inputEnabled = true;
	
	//  Allow dragging - the 'true' parameter will make the sprite snap to the center
	player1.input.enableDrag(false, true);
	player2.input.enableDrag(false, true);
		
	test(625, 423, 'black', 'ruby');
	test(458, 286, 'black', 'ruby');
	test(167, 270, 'black', 'star');
	
	MenuText = game.add.bitmapText(830, 310, 'desyrel','Player1 \n 500', 34);
		
	coin = game.add.sprite(800, 360, 'coin');
	//coin.animations.add('walk');
	//coin.animations.play('walk', 10, true);

	cursors = game.input.keyboard.createCursorKeys();
}

function test(x, y, name, name2) {
	name = game.add.sprite(x, y, name);
	name.inputEnabled = true;
	name.input.useHandCursor = true;
	name.events.onInputDown.add(changeCard, this);	
}

function makeButton(name, x, y) {
	var button = game.add.button(x, y, 'button', click, this, 0, 1, 2);
	button.name = name;
	button.scale.set(2, 2);
	button.smoothed = false;

	var text = game.add.bitmapText(x, y + 7, 'desyrel', name, 24);
	text.x += (button.width / 2) - (text.textWidth / 2);
}

function click(button) {
	dice = game.add.sprite(20, 16, 'dice');
	dice.animations.add('walk');
	dice.animations.play('walk', 20, true);
}
	
function changeCard(black) {
	black.loadTexture('ruby', 0);
}

function update() {

    game.input.pointer1.isDown;
	
	if (cursors.left.isDown)
    {
        game.camera.x -= 4;
    }
    else if (cursors.right.isDown)
    {
        game.camera.x += 4;
    }

}

function render() {
	game.debug.cameraInfo(game.camera, 32, 32);
    game.debug.pointer(game.input.pointer1);
}