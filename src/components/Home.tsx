import Button from "./Button";
import banner from "../assets/banner.png";
import { NavLink, Outlet } from "react-router";

export default function Home() {
  function handleSeeMore() {}

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__title">
          <h1>
            <strong>Find</strong> all your favorite <strong>character</strong>
          </h1>
        </div>

        <div className="home__subtitle">
          <h2>
            You can find out all the information about your favorite characters
          </h2>
        </div>

        <NavLink to='/characters'>
          <Button className="see-more__button" onClick={handleSeeMore}>
            See more...
          </Button>
        </NavLink>
      </div>

      <div className="home__banner">
        <img src={banner} />
      </div>

      <Outlet />
    </div>
  );
}
