import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServicesMainBody from "../components/ServicesMainBody";
import "../CSS/Services.css";

import { useParams } from "react-router-dom";

const Services = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params);
    if (params.sectionId) {
      const element = document.getElementById(params.sectionId);
      console.log(element);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="services">
      <div className="services-body">
        <Header pageNum={2} />
        <ServicesMainBody />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
