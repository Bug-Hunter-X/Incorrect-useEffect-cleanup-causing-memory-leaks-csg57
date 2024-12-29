```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  let intervalId;

  useEffect(() => {
    console.log('Effect runs');
    intervalId = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId); // Correct cleanup
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```