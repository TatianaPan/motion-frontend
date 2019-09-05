import React from 'react';
import Login from '../../containers/Login';
import './index.css';
//import motion from '../../assets/icons/landing.png';

function App() {
  
  return (
    <div className="App">
      <div className='left'>
        {/* <img src={motion}/> */}
      </div>
      <div className='right'>
        <Login />
      </div>
      
     
    </div>
  );
}

export default App;
