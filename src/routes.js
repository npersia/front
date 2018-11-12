import React from 'react';
import {Route, Switch} from 'react-router-dom';


import App from './components/App';
import About from './components/Orders';
import Contact from './components/Restaurants';
import Home from './components/Home';
import Page404 from './components/Page404';


const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path='/orders' component={About} />
            <Route exact path='/restaurants' component={Contact} />
            <Route exact path='/' component={Home} />
            <Route component={Page404} />
        </Switch>
    </App>

export default AppRoutes;