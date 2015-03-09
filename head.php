<?php include 'includes/config.php';?>
<!doctype html>
<html class="no-js" lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="Game Star of Africa alpha." />
	<meta name="author" content="bionick8, skankjo" />
	<?php echo '<title>' . $sitename . '</title>' . "\n";?>
	<link rel="stylesheet" href="css/foundation.min.css" />
	<link rel="stylesheet" href="css/normalize.css" />
	<script src="js/modernizr.js"></script>
<?php echo '</head>' . "\n";?>
<body>
<!-- Header and Nav -->
<div class="off-canvas-wrap" data-offcanvas> 
	<div class="inner-wrap">
	<nav class="tab-bar">
		<section class="left-small">
			<a class="left-off-canvas-toggle menu-icon" href="#" data-options="disable_for_touch:true">
			<span></span></a>
		</section>
		<section class="middle tab-bar-section">
			<h1 class="title"><?php echo $sitename;?></h1>
		</section>
		<section class="right-small">
			<a class="right-off-canvas-toggle menu-icon" href="#" data-options="disable_for_touch:true">
			<span></span></a>
		</section>
	</nav>
	<aside class="left-off-canvas-menu">
		<ul class="off-canvas-list">
			<li><label>Menu</label></li>
			<li><a href="index.php">Home</a></li>
			<li><a href="bugtracker.php">Bugtracker</a></li>
			<li><a href="rules.php">Rules</a></li>
			<li><a href="about.php">About</a></li>
			<li class="has-form"><a href="registration.php" class="small button">Join us</a></li>
		</ul>
	</aside>
	<aside class="right-off-canvas-menu">
		<ul class="off-canvas-list">
			<li><label>Users</label></li>
			<li><a href="#">Skankjo</a></li>
			<li><a href="#">Bionick8</a></li>
		</ul>
	</aside>