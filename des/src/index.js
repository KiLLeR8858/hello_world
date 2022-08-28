import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Car from './Components/Car/indexCar';
import Text from './Components/Text/indexText';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Car/>
    <Text/> 
  </React.StrictMode>
);


