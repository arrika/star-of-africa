<?php require( dirname( __FILE__ ) . '/head.php' );?>
	<!-- Main content-->
	<section class="main-section">
		<div class="row">
			<div class="large-8 columns">
				<form data-abide>
					<fieldset>
					<legend>Registration Form</legend>
					<div class="name-field">
						<label>Your name <small>required</small></label>
						<input type="text" required pattern="[a-zA-Z]+">
						<small class="error">Name is required and must be a string.</small>
					</div>
					
					<div class="email-field">
						<label>Email <small>required</small></label>
						<input type="email" required> <small class="error">An email address is required.</small>
					</div>
					
					<div class="password-field">
						<label for="password">Password <small>required</small></label>
						<input type="password" id="password" placeholder="StaR78!&" name="password" required>
						<small class="error">Passwords must be at least 8 characters with 1 capital letter, 1 number, and one special character.</small>
					</div>
					
					<div class="password-field">
						<label for="confirmPassword">Confirm Password <small>required</small></label>
						<input type="password" id="confirmPassword" placeholder="StaR78!&" name="confirmPassword" required data-equalto="password">
						<small class="error" data-error-message>Passwords must match.</small>
					</div>
					
					<button type="submit">Submit</button>
					</fieldset>
				</form>
			</div>
		</div>
	</section>
	<!-- End Content-->
	<a class="exit-off-canvas"></a>
	</div>
</div>
<!-- End Nav-->
<!-- Footer -->
    <script src="js/jquery.js"></script>
    <script src="js/foundation.min.js"></script>
    <script>
		$(document).foundation();
    </script>
</body>
</html>