import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <main>
      <h1>Contact Us</h1>
      <button>
        <Link to="/about-us">back</Link>
      </button>
    </main>
  );
};

export default ContactUs;
