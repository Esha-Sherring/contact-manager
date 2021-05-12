  import React,{Component} from 'react';
  import Header from './components/layout/Header';
  import AddContact from './components/contacts/AddContact';
  import Contacts from './components/contacts/Contacts';
  import {Provider} from './context';
  import About from './components/pages/about'
  import EditContact from './components/contacts/EditContacts';
  import NotFound from './components/pages/notfound'
  import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './App.css';


  class App extends Component{
    render(){
      return(
        <Provider>
         <Router>
          <div className="App">
          <Header branding="Contact manager"/>
          <div className="container">
              <Switch>
              <Route exact path="/"component={Contacts} />
              <Route exact path="/about"component={About} />
              <Route exact path="/add"component={AddContact} />
              <Route exact path="/edit/:id"component={EditContact} />
              <Route exact component={NotFound} />
              </Switch>
             
          </div>
        </div>
        </Router>
        </Provider>
        
      );
    }
  }
  

  export default App;
