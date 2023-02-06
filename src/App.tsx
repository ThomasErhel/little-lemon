import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
