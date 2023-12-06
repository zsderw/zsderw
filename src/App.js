import React from 'react';
import './App.css';
import './Footer.css';
import './Header.css';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>DODOMALL</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <h2>상품 목록</h2>
      <ProductList />
      <footer>
        <p>&copy; 2023 DODOMALL</p>
      </footer>
    </div>
  );
}

export default App;