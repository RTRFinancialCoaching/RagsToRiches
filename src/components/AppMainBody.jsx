import React from "react";
import GridBox from "./GridBox.jsx";

const AppMainBody = () => {
  return (
    <div className="main-body">
      <div className="app-content">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <p>
          Sed varius, tellus nec pharetra lobortis, metus ante placerat nunc,
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
              icon="/icons/business-chart-mag.svg"
              h3="Thats Right"
              classVar="border-left border-right"
              p="Suspendisse in purus maximus, pulvinar nibh nec, egestas nisl. Maecenas eleifend velit vulputate, rutrum orci eu, lacinia erat. Cras id ipsum non dui malesuada convallis non non ipsum."
            />
            <GridBox
              icon="/icons/business-chart.svg"
              h3="Thats Right"
              p="Suspendisse in purus maximus, pulvinar nibh nec, egestas nisl. Maecenas eleifend velit vulputate, rutrum orci eu, lacinia erat. Cras id ipsum non dui malesuada convallis non non ipsum."
            />
          </div>
          <div className="app-white-row">
            <GridBox
              icon="/icons/business-color.svg"
              h3="Thats Right"
              classVar="border-top"
              p="Suspendisse in purus maximus, pulvinar nibh nec, egestas nisl. Maecenas eleifend velit vulputate, rutrum orci eu, lacinia erat. Cras id ipsum non dui malesuada convallis non non ipsum."
            />
            <GridBox
              icon="/icons/business-employee.svg"
              h3="Thats Right"
              classVar="border-left border-right border-top"
              p="Suspendisse in purus maximus, pulvinar nibh nec, egestas nisl. Maecenas eleifend velit vulputate, rutrum orci eu, lacinia erat. Cras id ipsum non dui malesuada convallis non non ipsum."
            />
            <GridBox
              icon="/icons/business-finance.svg"
              h3="Thats Right"
              classVar="border-top"
              p="Suspendisse in purus maximus, pulvinar nibh nec, egestas nisl. Maecenas eleifend velit vulputate, rutrum orci eu, lacinia erat. Cras id ipsum non dui malesuada convallis non non ipsum."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppMainBody;
