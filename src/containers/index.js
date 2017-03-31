import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { firebaseAuth } from '../config/constants';

// Containers
import Login from './Login';

const PrivateRoute = ({authed, component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props}/>
                : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>}
        />
    )
};

const PublicRoute = ({authed, component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => authed === false
                ? <Component {...props}/>
                : <Redirect to='/welcome'/>}
        />
    )
};

class App extends Component {
    state = {
        authed: false,
        loading: true,
    };
    
    componentDidMount() {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authed: true,
                    loading: false
                });
            } else {
                this.setState({
                    loading: false,
                })                
            }
        });        
    }
    
    componentWillUnmount() {
        this.removeListener();    
    }
    
    render() {
        return this.state.loading === true ? <h1>Loading...</h1> : (
            <BrowserRouter>
                <Switch>
                    <PublicRoute authed={this.state.authed} path='/' component={Login}/>
                    <PublicRoute authed={this.state.authed} path='/login' component={Login}/>
                    <Route render={() => <h3>404</h3>}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

App.propTypes = {

};

export default App;