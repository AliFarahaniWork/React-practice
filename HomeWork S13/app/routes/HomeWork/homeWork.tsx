import { Link } from "react-router";
import "../style.css";


export default function HomeWork() {
    return(
    <div className="container">
      <h2 className="title">Home Work Calculator</h2>

      <div className="nav">
        <Link className="link" to="/HomeWork/Sum">Sum</Link>
        <Link className="link" to="/HomeWork/Multi">Multi</Link>
        <Link className="link" to="/HomeWork/Pow">Pow</Link>
        <Link className="link" to="/HomeWork/Divide">Divide</Link>
      </div>
    </div>
  );
}
// /sum?a=2&b=3
// /multi?a=2&b=3
// /pow?a=2&b=3
// /divide?a=2&b=3
