import { Link } from "react-router-dom";
import "../css/Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="showcase">
        <div className="showcase-content">
          <div className="text-side">
            <h1 className="text-4xl">
              More than 80% of start-ups we consulted received at least ONE
              funding.
            </h1>
            <h3 className="text-2xl">
              That equals more than 180 successful projects
            </h3>
            <Link to={"#"} className="block">
              <span>Read More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>
            </Link>
          </div>
          <div className="image-side"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
