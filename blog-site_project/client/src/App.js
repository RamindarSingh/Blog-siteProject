import React from 'react';

import './App.css';

import Navbar from './component/Navbar'
import Users from './component/Users'
import SingleUser from './component/SingleUser'
import NewUser from './component/NewUser'
import EditUser from './component/EditUser'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter as Router, Route} from 'react-router-dom'



function App() {
  return (
      <Provider store={store}>
          <Router>
              <div>
                  <Navbar/>
                  <Route exact path="/" component={Users}/>
                  <Route exact path="/new" component={NewUser}/>
                  <Route exact path="/edit" component={EditUser}/>
                  <Route exact path="/users/:id" component={SingleUser}/>
              </div>
          </Router>
      </Provider>
  );
}

export default App;
