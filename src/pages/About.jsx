import "../CSS/About.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutMainBody from "../components/AboutMainBody";

const About = () => {
  return (
    <div className="about">
      <div className="about-body about-tint">
        <Header pageNum={1} />
        <AboutMainBody />
      </div>
      <Footer />
    </div>
  );
};

export default About;
