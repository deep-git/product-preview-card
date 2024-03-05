import React from 'react';
import './App.css';

function App() {

  return (
    <div className="outer_container">
      <main className="card_container">
        <div className="background_container"/>

        <section className="right_content_container">
          <p className="top_perfume_text">Perfume</p>
          <h1 className="main_heading">Gabrielle Essence Eau De Parfum</h1>

          <p className="product_description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>

          <div className="price_container">
            <p>$149.99</p>
            <p>$169.99</p>
          </div>

          <button className="cart_container">
            <img src="/product-preview-card/icon-cart.svg" alt="Cart"/>
            <p>Add to Cart</p>
          </button>
        </section>
      </main>
    </div>
  )
}

export default App;
