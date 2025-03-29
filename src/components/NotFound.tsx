import { NavLink } from "react-router";
import notFound from "../assets/deathStar.png";
import Button from "./Button";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <img className="not-found__image" src={notFound} />
        <span>404</span>
      </div>

      <NavLink to="/">
        <Button className="not-found__button">
          Return
        </Button>
      </NavLink>

      <div className="stars"></div>
      <div className="twinkling"></div>
    </div>
  );
}
