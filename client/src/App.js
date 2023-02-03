import "./App.css";
import { Container } from "react-bootstrap";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Topbar from './components/Topbar'
import About from'./components/About'
import Contact from'./components/Contact'
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <NavBar/>
      <Switch>
        <Route path="/about" component={About} exact></Route>
        <Route path="/contact" component={Contact} exact></Route>
        <Route path="/" component={HomeScreen} exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
