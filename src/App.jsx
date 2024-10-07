import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Cart from './components/Cart';


import ArrivalComponents from './components/ArrivalComponents';
import Form from './components/Form';
import Footer from './components/Footer';


function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Banner />
      <Menu/>
      <Cart/>
      <ArrivalComponents/>
      <Form/>
      <Footer/>
      
    </div>
  );
}

export default App;
