import type { Route } from "./+types/home";
import { Link } from "react-router";
import "./style.css";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

export default function Home() {
  return (
    <div className="home">
      <div className="box">
        <h2>HomeWork S13 - Ali Farahani</h2>

        <Link className="link" to="/HomeWork">
          Click Here
        </Link>
      </div>
    </div>
  );}
