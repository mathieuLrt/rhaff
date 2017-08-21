import React from 'react';
import { render } from 'react-dom';

//Components
import App from './components/App';
import ErrorNotFound from './components/ErrorNotFound';

//Router
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';

const Root = () =>{
    return (
        <Router>
            <div>
                <Route exact path="/" component={App} />
            </div>
        </Router>
    )
}

render(
    <Root />, document.getElementById('root'));
