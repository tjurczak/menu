import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from './Home';
import Details from './Details';
import DetailsList2 from './DetailsList2';
import Bar from './Bar';
import Product from './Product';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppTheme from './AppTheme';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <MuiThemeProvider theme={AppTheme}>

                        <Route exact path="/" component={Home} />
                        <Route path="/details" component={Details} />
                        <Route path="/details2" component={DetailsList2} />
                        <Route path="/product" component={Product} />
                    </MuiThemeProvider>
                </div>
            </Router>
        );
    }
}

export default App;
