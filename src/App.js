import './App.css';
import Home from './Components/Home'
import Services from "./Components/pages/Services"
import Projects from "./Components/pages/Projects"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from "./Components/subComponents/Navbar"
import Contact from "./Components/pages/Contact"
// import "bootstrap";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
         <Route path="/services" exact component={Services} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact={true} component={Contact} />
          <Route path="*" component={()=>{
              return(
                  <div className="container-fluid bg-light" style={{ height:"100vh"}}>
                      <Navbar />
                      <div className="p-5">

                          <div className="p-5 text-center mt-5"><br/>
                              <h3 className="display-3" style={{fontWeight:"bold"}}>Error 404</h3>
                              <span className="text-secondary p-2">| Page not found.. | </span>
                          </div>
                      </div>
                  </div>
              )
          }} />
      </Switch>
    </Router>
  );
}

export default App;
