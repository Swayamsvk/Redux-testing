import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import ProductManager from './components/ProductManager';
import EmployeeManager from './components/EmployeeManager';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ProductManager/>
      <EmployeeManager/>
    </div>
    </Provider>
  );
}

export default App;
