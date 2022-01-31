import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const SingleQuestion = ({ title, info }) => {

    const [display, setDisplay] = useState(false);

    const toggleBtn = () => {
        setDisplay(!display);
        console.log(display);
    }

    return <div className="question-box">
        <div className="question">
            <div className="inner-question-box">
                <h1>{title}</h1>
            </div>
            <div className="toggle-btn-group">
                <button onClick={() => toggleBtn()}>
                    {/* <FaPlus /> */}
                    {!display ? <FaPlus /> : <FaMinus />}
                </button>
            </div>
        </div>
        <div className="info-txt-box">
            {display && info}
        </div>
    </div>
}

export default SingleQuestion;