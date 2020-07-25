import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FilterFactsView from './components/FilterFacts';

function App() {
    return (
        <Router>
            <ToastContainer autoClose={3000} />
            <Switch>
                <Route exact path="/" component={FilterFactsView} />
            </Switch>
        </Router>
    );
}

export default App;
