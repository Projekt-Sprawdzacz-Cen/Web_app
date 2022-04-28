import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Panel_logowania = () => {
    return (
		<div>
			<div className="container" style={{backgroundColor: "rgb(9, 192, 192)", width: "480px",
			paddingTop: "15px", paddingBottom: "15px", paddingLeft:"40px", paddingRight: "40px", marginTop: "125px"}}>

				<h5 style={{marginBottom: "25px"}}>Zaloguj się na swoje konto:</h5>
				
				<form className="needs-validation" action="/action_page.php" novalidate>

					<input type="text" id="user_name_log" className="form-control me-2" placeholder="Nazwa użytkownika" name="user_name_log" required/>
					<div className="invalid-feedback">
						Nic nie wpisano do tego pola!
					</div>
					<br/>

					<input type="password" id="password_log" className="form-control me-2" placeholder="Hasło" name="password_log" required/>
					<div className="invalid-feedback">
						Nic nie wpisano do tego pola!
					</div>
					<br/>

					<button className="btn btn-light" type="submit"
					style={{marginTop: "15px", border: "1px solid lightgray", width: "400px"}}>Zaloguj się</button>
					
				</form>
				
				<br/>
				<a className="btn btn-success" href="#" role="button" style={{width: "400px"}}>
					<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-google"
					viewBox="0 0 16 16" style={{float: "left", marginTop: "2px"}}>
						<path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 
						16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 
						3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 
						3.702 0 0 0 1.599-2.431H8v-3.08h7.545z">
						</path>
					</svg>
					Zaloguj się przez Google
				</a>
				
				<br/>
				<br/>
				<a className="btn btn-primary" href="#" role="button" style={{width: "400px"}}>
					<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-facebook"
					viewBox="0 0 16 16" style={{float: "left", marginTop: "2px"}}>
						<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 
						7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 
						0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
						</path>
					</svg>
					Zaloguj się przez Facebook
				</a>

				<br/>
				<br/>
				<p>Nie masz konta? <Link onClick={() => {window.location.href="/panel_rejestracji"}}>Zarejestruj się</Link> </p>
				<p>Zapomniałeś hasła? <a href="">Odzyskaj hasło</a> </p>
			</div>

			{/*
			<script>
              	// Example starter JavaScript for disabling form submissions if there are invalid fields
				(function () {
					'use strict'

					// Fetch all the forms we want to apply custom Bootstrap validation styles to
					var forms = document.querySelectorAll('.needs-validation')

					// Loop over them and prevent submission
					Array.prototype.slice.call(forms)
						.forEach(function (form) {
							form.addEventListener('submit', function (event) {
								if (!form.checkValidity()) {
									event.preventDefault()
									event.stopPropagation()
								}

								form.classList.add('was-validated')
							}, false)
						})
				})()
        	</script>
			*/}

			<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
			integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
			integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
			

		</div>
          
    )
}

export default Panel_logowania;