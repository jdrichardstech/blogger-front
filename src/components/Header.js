import React from 'react';

const Header = (props) => {
  return (
    <header
      style={{
        height: '160px',
        background: '#447f33',
        paddingTop: '50px',
        color: 'white',
      }}
    >
      <h1 style={{ textAlign: 'center', fontSize: '3em' }}>Blogger</h1>
    </header>
  );
};

export default Header;
