import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import ShowDetail from './components/ShowDetail';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/show/:id" element={<ShowDetail/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

