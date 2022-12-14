import { Link } from "react-router-dom";

export const Other = () => {
  return (
    <div>
      <h3>Other Page</h3>
      <Link to="/">Navigate to Home</Link>
      <br />
      <br />
      <form method="POST">
        <label htmlFor="something">Some Field Label:</label>
        <input type="text" name="something" placeholder="Type something..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
