import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Home from './Components/Home';
import About from './Components/About';
import './default.css';
import Issues from './Components/Issues';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  

    const menuToggle = () => {
        setMenuOpen(menuOpen => !menuOpen)
    }
  return (
    <div className="App">

      <Header click={menuToggle} />

      {menuOpen && [
      <Menu click={menuToggle}/>
      ]}

      <Switch>
        <Route exact path='/' render={() => (
          <Home />
        )} />
        <Route path='/about' render={() => (
          <About />
        )} />
        <Route path='/issues' render={() => (
          <Issues />
        )} />
      </Switch>

      <Footer />
      
    </div>
  );
}

export default App;
