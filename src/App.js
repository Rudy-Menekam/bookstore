import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Books from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <>
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
