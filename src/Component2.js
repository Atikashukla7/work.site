import React from 'react';
import bgImage from './bg.jpg';
function Component2() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`, // Replace with your image URL
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        backgroundSize: 'cover',
  backgroundPosition: 'top', 
  height: '100vh',
      }}
    >
      <div className='bg'>
        <h1 >Ads that Work</h1>
        <p>The retargeting + prospecting platformof choice <br />for over 25,000 advertisers worldwide</p>
        
        <button
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
  );
}

export default Component2;
