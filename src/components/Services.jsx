import "../CSS/Services.css";
import ServicesContainer from "./ServicesContainer";

const Services = () => {
  return (
    <div className="body-services">
      <div className="services-back"></div>
      <h1>What’s included when we work together?</h1>
      <p>Click each service to learn more</p>
      <ServicesContainer />
    </div>
  );
};

export default Services;
