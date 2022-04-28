import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';

import Footer from './components/footer';

import Home from './Pages/Home';
import Tracked_products from './Pages/Tracked_products';
import Panel_logowania from './Pages/panel_logowania';
import Panel_rejestracji from './Pages/panel_rejestracji';
import About_us from './Pages/About_us';

function App() {
	return (
		<Router>
			<div>
				<switch>
					<Route path='/' exact component={Home} />
					<Route path='/tracked_products' exact component={withRouter(Tracked_products)} />
					<Route path='/panel_logowania' component={Panel_logowania} />
					<Route path='/panel_rejestracji' component={Panel_rejestracji} />
					<Route path='/about_us' component={About_us} />
				</switch>
			</div>
			<Footer />
		</Router>
	);
}

export default App;