import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Wrapper from './pages/Wrapper/Wrapper';
import Detail from './pages/Detail/Detail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Route>
      <Route path="*" element={<h1>Page 404 Not Found</h1>} />
    </Routes>
  );
  // return (
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/about" element={<About />} />
  //   </Routes>
  // );
};

export default App;
