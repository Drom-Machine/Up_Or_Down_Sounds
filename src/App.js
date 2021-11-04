import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import { ShoppingCartContextProvider } from './context/shoppingCartContext';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import SoundStore from "./pages/SoundStore";
import NavBar from "./components/NavBar";



function App() {

  return (
    <ShoppingCartContextProvider>
      <Router>
        <NavBar />
          <Switch>
            <Route component={HomePage} path='/' exact />
            <Route component={AboutMe} path='/AboutMe' />
            <Route component={SoundStore} path='/SoundStore' />
            <Route component={CartPage} path='/CartPage' />
            <Route component={AboutMe} path='/AboutMe' />
          </Switch>
      </Router>
    </ShoppingCartContextProvider>
  );
}

export default App;
