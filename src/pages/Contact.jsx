import Header from "../components/Header";
import ActionMain from "../components/ActionMain";
import "../CSS/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Header pageNum={4} />
      <Header pageNum={4} sticky={true} />
      <div className="contact-back">
        <div className="contact-back-shade"></div>
      </div>
      <div className="contact-hr-div">
        <hr />
        <h1>Contact:</h1>
        <hr />
      </div>

      <div className="contact-main">
        <ActionMain />
      </div>
    </div>
  );
};

export default Contact;
