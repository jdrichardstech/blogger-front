import React from 'react';

function Button({ className, onClick, blog, children, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      style={{ margin: '10px 15px' }}
    >
      {children}
    </button>
  );
}
export default Button;
