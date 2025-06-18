import "../CSS/App.css";
import "../CSS/Header.css";
import "../CSS/Lure.css";
import "../CSS/White.css";
import "../CSS/Feeling.css";
import "../CSS/Footer.css";
import Header from "../components/Header.jsx";
import AppMainBody from "../components/AppMainBody.jsx";
import Lure from "../components/Lure.jsx";
import Feeling from "../components/Feeling.jsx";
import Footer from "../components/Footer.jsx";

function App() {
  return (
    <div className="app">
      <div className="body body-tint">
        <Header pageNum={0} />
        <AppMainBody />
      </div>
      <Lure />
      <Feeling />
      <Footer />
    </div>
  );
}

export default App;
