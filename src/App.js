import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import "bootstrap";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/login" exact component={Login} /> */}
      </Switch>
    </Router>
  );
}

export default App;
