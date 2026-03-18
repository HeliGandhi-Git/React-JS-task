import { Link, Routes, Route } from "react-router-dom";
import Task1 from "./Task1";
import Task2 from "./Task2";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>My Tasks</h1>

      <nav>
        <Link to="/">Task 1</Link>
        <Link to="/task2">Task 2</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
      </Routes>
    </div>
  );
}

export default App;