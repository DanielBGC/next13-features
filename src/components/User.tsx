'use client';

import { useState } from 'react';

type UserPropsType = {};

export function User(props: UserPropsType) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((state) => state + 1)}>Increment</button>
    </div>
  );
}
