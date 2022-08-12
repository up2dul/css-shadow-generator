import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Footer, Header, Navbar } from './components';
import { BoxShadow, NotFound, TextShadow } from './pages';

const App = () => (
  <BrowserRouter>
    <Header />
    <Navbar />
    <Routes>
      <Route
        path='/'
        element={<Navigate to='/box-shadow' replace={true} />}
      />
      <Route path='/box-shadow' element={<BoxShadow />} />
      <Route path='/text-shadow' element={<TextShadow />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
