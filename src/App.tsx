// import { useStore } from './store';
import './App.css';
import { Link } from 'react-router';

function App() {
  // const { user, login, logout } = useStore();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Zustand Counter Example</h1>
        <div className="space-x-4">
          <button
            // onClick={decrement}
            className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600"
          >
            -
          </button>
          <span className="text-2xl font-bold">0</span>
          <button
            // onClick={increment}
            className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600"
          >
            +
          </button>
          <Link to="/test">Test</Link>        </div>
      </div>
    </div>
  );
}

export default App;
