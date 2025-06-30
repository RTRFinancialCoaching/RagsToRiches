import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServicesMainBody from "../components/ServicesMainBody";
import "../CSS/Services.css";

import { useParams } from "react-router-dom";

const Services = () => {
  const params = useParams();

  useEffect(() => {
    if (params.sectionId) {
      const element = document.getElementById(params.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        element.className = "services-link";
        const elContent = document.getElementById(
          params.sectionId + "-content"
        );
        elContent.className = "services-link-content";
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
