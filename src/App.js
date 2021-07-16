import Contents from "./contents";
import Footer from "./footer";
import Nav from "./nav";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

  return ( 
    <Router>
      <Nav/>
      <Switch>
        <Route path="/">
          <Contents/>
          <Footer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
