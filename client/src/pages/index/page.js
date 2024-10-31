// client/src/pages/index/page.js
import React from "react";

const HomePage = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <h1>Welcome to the Home Page!</h1>
        <p>Count: {count}</p>
        <button onClick={() => {
            console.log('Incrementing count');
            setCount(count + 1);
        }}
        className="btn"
        >Increment</button>
        <p>helooooo</p>
    </>
  );
};

export default HomePage;
