import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div className="app body body-tint">
      <Header />
      <div className="main-body">
        <div className="app-content">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <p>
            Sed varius, tellus nec pharetra lobortis, metus ante placerat nunc,
            fermentum lobortis tortor nisl vitae dolor.
          </p>
        </div>
        <div className="app-white">
          <h2> Were not like other girls</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
