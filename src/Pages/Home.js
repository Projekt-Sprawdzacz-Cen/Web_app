import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import './Home_style.css';

function Home() {
    return (
        <div className='container-fluid home-mb-footer-324 p-0 home-page'>

			<Navbar />
		
			<div className="container w-50 d-flex justify-content-center flex-wrap mt-5">

				<div className='w-75 mb-4'>
					<p className='home-custom-fsize'>
						Strona umożliwia obserwację ceny produktu z dwóch różnych sklepów poprzez wypełnienie formularzy
						z nazwami tych sklepów i danego produktu. Strona może także wysyłać powiadomienia o zmianie ceny w
						jednym z sklepów oraz pozwolić na porównywanie ceny produktu w obu sklepach.
					</p>
				</div>
				
				<br/>
				<p className='custom-fsize'>Wybierz sklepy i produkt, którego cena z tych sklepów ma być obserwowana:</p>

				<div className="container w-50 home-mt-30">

					<form className="needs-validation" action="/action_page.php" noValidate>
						<input type="text" id="first_shop_name" className="form-control me-2" placeholder="Nazwa pierwszego sklepu" name="first_shop_name" required/>
						<div className="invalid-feedback">
							Nic nie wpisano do tego pola!
						</div>
						<br/>

						<input type="text" id="second_shop_name" className="form-control me-2" placeholder="Nazwa drugiego sklepu" name="second_shop_name" required/>
						<div className="invalid-feedback">
							Nic nie wpisano do tego pola!
						</div>
						<br/>

						<input type="text" id="product_name" className="form-control me-2" placeholder="Nazwa produktu" name="product_name" required/>
						<div className="invalid-feedback">
							Nic nie wpisano do tego pola!
						</div>

						<button className="btn btn-light w-100 home-custom-button" type="submit">Wyszukaj ceny sklepów</button>

					</form>

					<p className='home-mt-30'>Wyniki:</p>
					<p id="first_shop_price">Cena w pierwszym sklepie -</p>
					<p id="second_shop_price">Cena w drugim sklepie -</p>
				
				</div>
				
			</div>
		
		</div>
    )
}

export default Home;