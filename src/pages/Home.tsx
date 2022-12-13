import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h3>Home Page</h3>
      <Link to="/other">Navigate to Other</Link>
    </div>
  );
};
