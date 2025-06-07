import logo from "./logo.svg";
import "./CSS/App.css";
import "./CSS/Header.css";
import "./CSS/Lure.css";
import "./CSS/White.css";
import Header from "./components/Header.jsx";
import AppMainBody from "./components/AppMainBody.jsx";
import Lure from "./components/Lure.jsx";
import Feeling from "./components/Feeling.jsx";

function App() {
  return (
    <div className="app">
      <div className="body body-tint">
        <Header page={0} />
        <AppMainBody />
      </div>
      <Lure />
      <Feeling />
    </div>
  );
}

export default App;
