import React from 'react';
import AppNavBar from './components/AppNavBar/AppNavBar';
import ProductList from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


import './App.css';


function App() {
  return (
    <Container>
          <AppNavBar /> 
          <ProductList />
    </Container>

  );
}

export default App;
