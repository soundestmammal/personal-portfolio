import React from 'react';
// import { FaReact } from "react-icons/fa";
import "../styles/Toolbox.css";

const Skill = (props) => {
    return(
        <div className="skillOut">
            <div>{props.name}</div>
            {/* <FaReact /> */}
        </div>
    );
}

export default Skill;