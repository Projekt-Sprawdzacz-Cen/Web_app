import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Panel_rejestracji() {
    return (
        <div>
            <div className="container" style={{backgroundColor: "rgb(9, 192, 192)", width: "480px",
			paddingTop: "15px", paddingBottom: "15px", paddingLeft:"40px", paddingRight: "40px", marginTop: "125px"}}>

                <h5 style={{marginBottom: "25px"}}>Zarejestruj swoje konto:</h5>

                <form className="needs-validation" action="/action_page.php" novalidate>

                    <input type="text" id="user_name" className="form-control me-2" placeholder="Nazwa użytkownika" name="user_name" required/>
                    <div className="invalid-feedback">
                        Nic nie wpisano do tego pola!
                    </div>
                    <br/>

                    <input type="password" id="password" className="form-control me-2" placeholder="Hasło" name="password" required/>
                    <div className="invalid-feedback">
                        Nic nie wpisano do tego pola!
                    </div>
                    <br/>

                    <input type="password" id="password" className="form-control me-2" placeholder="Powtórz hasło" name="password" required/>
                    <div className="invalid-feedback">
                        Nic nie wpisano do tego pola!
                    </div>
                    <br/>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label className="form-check-label" for="invalidCheck">
                            Oświadczam, że zapoznałem się z Regulaminem, akceptuję jego treść i zobowiązuję się przestrzegać jego postanowień.
                        </label>
                        <div className="invalid-feedback">
                            Musisz wyrazić zgodę przed przesłaniem.
                        </div>
                    </div>
                    
                    <button className="btn btn-light" type="submit"
					style={{marginTop: "15px", border: "1px solid lightgray", width: "400px"}}>Zarejestruj się</button>
                </form>

                <br/>
                <p>Masz już konto? <Link onClick={() => {window.location.href="/panel_logowania"}}>Zaloguj się</Link></p>
                
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
        
        </div>

    )
}

export default Panel_rejestracji;