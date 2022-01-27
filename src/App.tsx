import React from 'react';
import ProductList from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import AppNavBar from './components/AppNavBar/AppNavBar';







function App() {
  return (
    <div >
      <AppNavBar />
      {/* <AppNavBar /> */}
      <ProductList />
    </div>
  );
}

export default App;
