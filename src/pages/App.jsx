import "../CSS/App.css";
import "../CSS/Header.css";
import "../CSS/Lure.css";
import "../CSS/White.css";
import "../CSS/Feeling.css";
import "../CSS/Footer.css";
import "../CSS/Services.css";
import "../CSS/Action.css";
import "../CSS/Contact.css";
import "../CSS/Working.css";
import "../CSS/About.css";
import "../CSS/Mobile/AppMobile.css";
import "../CSS/Mobile/HeaderMobile.css";
import "../CSS/Mobile/LureMobile.css";
import "../CSS/Mobile/ActionMobile.css";
import "../CSS/Mobile/ServicesMobile.css";
import "../CSS/Mobile/ContactMobile.css";
import "../CSS/Mobile/AboutMobile.css";
import "../CSS/Mobile/WorkingMobile.css";
import Header from "../components/Header.jsx";
import AppMainBody from "../components/AppMainBody.jsx";
import Lure from "../components/Lure.jsx";
import Feeling from "../components/Feeling.jsx";
import Footer from "../components/Footer.jsx";
import Services from "../components/Services.jsx";
import Action from "../components/Action.jsx";

function App() {
  return (
    <div className="app">
      <div className="body body-tint">
        <Header pageNum={0} />
        <Header pageNum={0} sticky={true} />
        <AppMainBody />
      </div>
      <Lure />
      <Services />
      <Action />
    </div>
  );
}

export default App;
