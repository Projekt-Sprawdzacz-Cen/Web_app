import React, { useState } from 'react';
import Navbar from '../components/navbar';

function Home() {
    return (
        <div>

			<Navbar />
		
			<div className="container justify-content-center" style={{width: "850px", padding: "0px", marginTop: "50px"}}>
			
				<p>
					Strona umożliwia obserwację ceny produktu z dwóch różnych sklepów poprzez wypełnienie formularzy
					z nazwami tych sklepów i danego produktu. Strona może także wysyłać powiadomienia o zmianie ceny w
					jednym z sklepów oraz pozwolić na porównywanie ceny produktu w obu sklepach.
				</p>
				<br/>
				<p style={{fontSize: "18px", textAlign: "center"}}>Wybierz sklepy i produkt, którego cena z tych sklepów ma być obserwowana:</p>

				<div className="container justify-content-center" style={{width: "424px", marginTop: "30px"}}>

					<form className="needs-validation" action="/action_page.php" novalidate>
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
						<br/>

						<button class="btn btn-light" type="submit"
						style={{marginTop: "15px", backgroundColor: "white", border: "1px solid lightgray", width: "400px"}}>Wyszukaj ceny sklepów</button>

					</form>

					<p style={{marginTop: "30px"}}>Wyniki:</p>
					<p id="first_shop_price">Cena w pierwszym sklepie -</p>
					<p id="second_shop_price">Cena w drugim sklepie -</p>
				
				</div>
				
			</div>
		
		</div>
    )
}

export default Home;