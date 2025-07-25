import "../CSS/About.css";

import Header from "../components/Header";
import Action from "../components/Action";
import AboutMainBody from "../components/AboutMainBody";

const About = () => {
  return (
    <div className="about">
      <Header pageNum={3} />
      <Header pageNum={3} sticky={true} />
      <div className="about-body about-tint">
        <AboutMainBody />
      </div>
      <Action />
    </div>
  );
};

export default About;
