import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
      {/* to as a object & we can pass request parameters */}
      {/* <Link
        to={{
          pathname: "/about",
          search: '?sort=name',
          hash: '#hello',
        }}
      > */}
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
