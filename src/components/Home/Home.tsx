import { Link } from "react-router-dom";

export const Home = () => (
  <div className="home">
    <Link to="/code">code</Link>
    <Link to="/photo">photo</Link>
  </div>
);
