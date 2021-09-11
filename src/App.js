import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
import Home from './components/Home';
import News from './components/News';


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
// function App() {
//   return (
//     <div className='App'>
//       <Header />
//       <Home />
//       <GlobalStyle />
//     </div>
//   );
// }

export default App;
