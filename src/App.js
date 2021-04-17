import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import{ Switch, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Dropdown from './components/Dropdown';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('1 resized')
      }
    }
  })

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/services' component={Services}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
