import React, { useState } from "react";
import './App.css';
import questions from "./Data";

import SingleQuestion from "./SingleQuestion";

const App = () => {

  // const [data, setData] = useState(questions);

  return (
    <React.Fragment>
      <section>
        <div className="main-container">
          <div className="some-text">
            <p>Questions And Answers About Login</p>
          </div>
          <div className="main-content">
            {
              questions.map((question) => {
                return <SingleQuestion key={question.id} {...question} />;
              })
            }
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;