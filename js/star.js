var game = new Phaser.Game(1012, 1400, Phaser.AUTO, '', { preload: preload, create: create, render: render});

	function preload() {
		
		game.load.image('black', 'assets/sprites/sd/black.png');
		game.load.image('pirate', 'assets/sprites/sd/pirate.png');
		game.load.image('star', 'assets/sprites/sd/star.png');
		game.load.image('empty', 'assets/sprites/sd/empty.png');
		game.load.image('ruby', 'assets/sprites/sd/ruby.png');
		game.load.image('topaz', 'assets/sprites/sd/topaz.png');
		game.load.image('emerald', 'assets/sprites/sd/emerald.png');
		game.load.image('horseshoe', 'assets/sprites/sd/horseshoe.png');
		game.load.image('map', 'assets/map.jpg');

	}

var black;
var pirate;
var star;
var empty;
var ruby;
var topaz;
var emerald;
var horseshoe
	
	function create() {

		game.stage.backgroundColor = '#000';
		var image = game.add.sprite(0, 0, 'map');		
		pirate = game.add.sprite(63, 258, 'pirate');
		star = game.add.sprite(167, 270, 'star');
		empty = game.add.sprite(416, 214, 'empty');
		ruby = game.add.sprite(458, 286, 'ruby');
		topaz = game.add.sprite(329, 365, 'topaz');
		emerald = game.add.sprite(237, 474, 'emerald');
		horseshoe = game.add.sprite(20, 487, 'horseshoe');
		black = game.add.sprite(624, 422, 'black');
		
		game.input.onDown.addOnce(changeCard, this);

	}
	
	function changeCard() {

		black.loadTexture('ruby', 0);

	}

	function render() {

		game.debug.renderSpriteBounds(black);

	}
//	function update() {
//		logo.angle++;
//	}
	