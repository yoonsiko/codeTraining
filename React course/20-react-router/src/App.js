import {createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/Home';

// https://example.com/path

createBrowserRouter([
  {path:'/', element: <HomePage/>},
  {}
])

function App() {
  return <div></div>;
}

export default App;
