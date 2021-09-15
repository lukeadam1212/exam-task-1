import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <main>
      <h1>About Us</h1>
      <button>
        <Link to="/contact-us">back</Link>
      </button>
    </main>
  );
};

export default AboutUs;
