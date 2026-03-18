import { useState } from "react";

function Task1() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctPassword = "1234";

  function handleSubmit(e) {
    e.preventDefault();

    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Wrong password");
    }
  }

  
  if (!isAuthenticated) {
    return (
  <div className="card">
    <h2>Enter Password</h2>

    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button type="submit">Submit</button>
    </form>

    {error && <p className="error">{error}</p>}
  </div>
);
  }

  
 return (
  <div className="card">
    <h2>Access Granted ✅</h2>
  </div>
);
}
export default Task1;