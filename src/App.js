import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './Components/Footer';

import Home from './Pages/Home';
import Tracked_products from './Pages/Tracked_products';
import Panel_logowania from './Pages/Panel_logowania';
import Panel_rejestracji from './Pages/Panel_rejestracji';
import About_us from './Pages/About_us';
import Page_not_found from './Pages/404';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/tracked_products" exact component={Tracked_products} />
				<Route path="/panel_logowania" component={Panel_logowania} />
				<Route path="/panel_rejestracji" component={Panel_rejestracji} />
				<Route path="/about_us" component={About_us} />
				<Route component={Page_not_found} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;