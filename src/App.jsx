import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import GridBox from "./components/GridBox.jsx";

function App() {
  return (
    <div className="app">
      <div className="body body-tint">
        <Header />
        <div className="main-body">
          <div className="app-content">
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <p>
              Sed varius, tellus nec pharetra lobortis, metus ante placerat
              nunc,
            </p>
          </div>
          <div className="app-white">
            <h2> Were not like other girls</h2>
            <div className="app-white-hr">
              <div className="two-hr hr-left">
                <hr className="hr-top" />
                <hr className="hr-bottom" />
              </div>
              <h3> OUR BELIEFS:</h3>
              <div className="two-hr">
                <hr className="hr-top" />
                <hr className="hr-bottom" />
              </div>
            </div>
            <div className="app-white-grid">
              <div className="app-white-row">
                <GridBox
                  icon="/icons/business-bag.svg"
                  h3="Thats Right"
                  p="Suspendisse in purus maximus, pulvinar nibh nec, egestas nisl. Maecenas eleifend velit vulputate, rutrum orci eu, lacinia erat. Cras id ipsum non dui malesuada convallis non non ipsum."
                />
                <GridBox
                  icon="/icons/business-bag.svg"
                  h3="Thats Right"
                  classVar="border-left border-right"
                  p="Suspendisse in purus maximus, pulvinar nibh nec, egestas nisl. Maecenas eleifend velit vulputate, rutrum orci eu, lacinia erat. Cras id ipsum non dui malesuada convallis non non ipsum."
                />
                <GridBox
                  icon="/icons/business-bag.svg"
                  h3="Thats Right"
                  p="Suspendisse in purus maximus, pulvinar nibh nec, egestas nisl. Maecenas eleifend velit vulputate, rutrum orci eu, lacinia erat. Cras id ipsum non dui malesuada convallis non non ipsum."
                />
              </div>
              <div className="app-white-row">
                <GridBox
                  icon="/icons/business-bag.svg"
                  h3="Thats Right"
                  classVar="border-top"
                  p="Suspendisse in purus maximus, pulvinar nibh nec, egestas nisl. Maecenas eleifend velit vulputate, rutrum orci eu, lacinia erat. Cras id ipsum non dui malesuada convallis non non ipsum."
                />
                <GridBox
                  icon="/icons/business-bag.svg"
                  h3="Thats Right"
                  classVar="border-left border-right border-top"
                  p="Suspendisse in purus maximus, pulvinar nibh nec, egestas nisl. Maecenas eleifend velit vulputate, rutrum orci eu, lacinia erat. Cras id ipsum non dui malesuada convallis non non ipsum."
                />
                <GridBox
                  icon="/icons/business-bag.svg"
                  h3="Thats Right"
                  classVar="border-top"
                  p="Suspendisse in purus maximus, pulvinar nibh nec, egestas nisl. Maecenas eleifend velit vulputate, rutrum orci eu, lacinia erat. Cras id ipsum non dui malesuada convallis non non ipsum."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-lure body-shade">
        <div className="main-body">
          <div className="app-lure">
            <h1>Dis You?</h1>
            <div className="app-lure-cont">
              <div className="app-lure-arcl">
                <div className="app-lure-title">
                  <div className="app-lure-hr app-lure-left">
                    <hr className="lure-hr-top" />
                    <hr className="lure-hr-bottom" />
                  </div>
                  <h3>Your values:</h3>
                  <div className="app-lure-hr">
                    <hr className="lure-hr-top" />
                    <hr className="lure-hr-bottom" />
                  </div>
                </div>
                <p>
                  Nulla nec augue sit amet leo interdum gravida eget in tortor.
                  Curabitur dictum nulla eu odio pulvinar, nec porta turpis
                  bibendum. Proin eu est lorem. Nam venenatis ultrices nisi at
                  posuere. Phasellus scelerisque congue nunc, eu varius dolor
                  semper vel
                </p>
              </div>
              <div className="app-lure-arcl">
                <div className="app-lure-title">
                  <div className="app-lure-hr app-lure-left">
                    <hr className="lure-hr-top" />
                    <hr className="lure-hr-bottom" />
                  </div>
                  <h3>Your values:</h3>
                  <div className="app-lure-hr">
                    <hr className="lure-hr-top" />
                    <hr className="lure-hr-bottom" />
                  </div>
                </div>
                <p>
                  Nulla nec augue sit amet leo interdum gravida eget in tortor.
                  Curabitur dictum nulla eu odio pulvinar, nec porta turpis
                  bibendum. Proin eu est lorem. Nam venenatis ultrices nisi at
                  posuere. Phasellus scelerisque congue nunc, eu varius dolor
                  semper vel
                </p>
              </div>
            </div>
            <p>
              um non dui malesuada convallis non non ipsum. In hac habitasse
              platea dictumst. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Donec sollicitudin, libero ultricies ultr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
