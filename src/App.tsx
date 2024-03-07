import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { increment, decrement } from './features/counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from './features/counter/store'

function App() {
  const count = useSelector((state: RootState) => state.counter.value) //working
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}> 
          increment ⬆️
        </button>
        <button onClick={() => dispatch(decrement())}>
          decrement ⬇️
        </button>
        {/* when clicked, this button will dispatch the icrement async action */}
        {/* the increment a sync action in turn execute incrementAsync saga . */}
        <button onClick={() => dispatch({type: 'INCREMENT_ASYNC'})}>
          lazy increment 😴
        </button>
        <p>
        count is {count}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App