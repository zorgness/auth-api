import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import NavbarApp from './components/Navbar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (



    <Router>
        <NavbarApp/>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Register} />
            <Route path="/login" component={Login} />
         </Switch>

    </Router>

  );
}

export default App;
