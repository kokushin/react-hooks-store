import React, { useContext } from 'react';
import { Provider, Store } from './store';

const Counter = () => {
  const { state, dispatch } = useContext(Store);
  return (
    <>
      count: {state.count}
      <div>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      </div>
    </>
  );
}

const App = () => (
  <Provider>
    <Counter />
  </Provider>
);

export default App;