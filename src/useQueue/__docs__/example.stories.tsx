import * as React from 'react';
import { useQueue } from '../..';

export const Example: React.FC = () => {
  const { add, remove, first, last, size } = useQueue<number>();

  return (
    <div>
      <ul>
        <li>first: {first}</li>
        <li>last: {last}</li>
        <li>size: {size}</li>
      </ul>
      <button onClick={() => add((last || 0) + 1)}>Add</button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  );
};
