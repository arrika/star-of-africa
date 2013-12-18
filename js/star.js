var game = new Phaser.Game(1012, 1400, Phaser.AUTO, '', { preload: preload, create: create, render: render});

	function preload() {
		
		game.load.image('black', 'assets/sprites/black.png');
		game.load.image('pirate', 'assets/sprites/pirate.png');
		game.load.image('star', 'assets/sprites/star.png');
		game.load.image('empty', 'assets/sprites/empty.png');
		game.load.image('ruby', 'assets/sprites/ruby.png');
		game.load.image('topaz', 'assets/sprites/topaz.png');
		game.load.image('emerald', 'assets/sprites/emerald.png');
		game.load.image('horseshoe', 'assets/sprites/horseshoe.png');
		game.load.image('coin100', 'assets/sprites/coin100.png');
		game.load.image('coin500', 'assets/sprites/coin500.png');
		game.load.image('map', 'assets/map.jpg');

	}

var map;
var black;
var pirate;
var star;
var empty;
var ruby;
var topaz;
var emerald;
var horseshoe;
var coin100;
var coin500
	
	function create() {

		game.stage.backgroundColor = '#000';
		map = game.add.sprite(0, 0, 'map');		
		coin100 = game.add.sprite(800, 250, 'coin100');
		coin500 = game.add.sprite(800, 350, 'coin500');
		pirate = game.add.sprite(63, 258, 'pirate');
		pirate = game.add.sprite(70, 591, 'pirate');
		pirate = game.add.sprite(325, 645, 'pirate');
		pirate = game.add.sprite(580, 561, 'pirate');
		pirate = game.add.sprite(755, 481, 'pirate');		
		star = game.add.sprite(167, 270, 'star');
		empty = game.add.sprite(416, 214, 'empty');
		empty = game.add.sprite(935, 595, 'empty');
		empty = game.add.sprite(786, 626, 'empty');
		empty = game.add.sprite(635, 642, 'empty');
		empty = game.add.sprite(707, 716, 'empty');
		empty = game.add.sprite(453, 488, 'empty');
		empty = game.add.sprite(428, 716, 'empty');
		empty = game.add.sprite(570, 830, 'empty');
		empty = game.add.sprite(412, 861, 'empty');
		ruby = game.add.sprite(458, 286, 'ruby');
		black = game.add.sprite(625, 423, 'black');
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
		
		game.input.onDown.addOnce(changeCard, this);

	}
	
	function changeCard() {

		black.loadTexture('ruby', 0);

	}

	function render() {

		game.debug.renderSpriteBounds(black);

	}
	