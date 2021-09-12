import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
import Home from './components/Home';
import News from './components/News';
// import NewHome from './components/NewHome'


import { GlobalStyle } from './GlobalStyle';

const App =() => (
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:objectID' element={<News/>}/>
      <Route path='/*' element={<Home/>}/>
    </Routes>
    <GlobalStyle/>
  </Router>
)


export default App;
