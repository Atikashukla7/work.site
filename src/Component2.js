import React from 'react';
import bgImage from './bg.jpg';
//import { Image } from 'react-bootstrap';
function Component2() {
  return (

<div>



  
    <div className="d-flex align-items-center justify-content-center content"
      style={{
        backgroundImage: `url(${bgImage})`, // Replace with your image URL
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        backgroundSize: 'cover',
  backgroundPosition: 'top', 
 
  height: '475px',
  
      }}
    >
      <div className='bg container text-center'>
        <h1 className="display-4">Ads that Work</h1>
        <p className="lead">The retargeting + prospecting platformof choice <br />for over 25,000 advertisers worldwide</p>
        
        <button className="btn btn-primary btn-lg"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor:' rgb(233, 240, 245)',
            color: ' rgb(0, 140, 255)',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => alert('Button Clicked!')}
        >
          Sign Up Today
        </button>
      </div>
    </div>
    </div>
  );
}

export default Component2;
