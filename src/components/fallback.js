import React from 'react';

// falback component to show while page is being loaded
const fallback = () => {
  return (
    <div id="fallback">
      <h1>LOADING …</h1>
    </div>
  );
};

export default fallback;
