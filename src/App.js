import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <ul className="lista-compra_Lista">
           <li>Item de la compra uno</li>
           <li>Item de la compra dos</li>
         </ul>
        </header>
        <div className="lista-compra_modulo-input ">
        <input type="text" placeholder="Lista de la compra" name="Lista de la compra" />
        <button>Enviar a la lista</button>
        </div>
      </div>
    );
  }
}

export default App;
