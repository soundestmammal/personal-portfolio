import React from 'react';
import Skill from './Skill';
import { FaReact, FaSass, FaPython} from "react-icons/fa";
import { DiMongodb, DiFirebase, DiPhp, } from "react-icons/di";
import "../styles/Toolbox.css";

const Toolbox = () => {
    return (
        <div className="toolboxWrapper">
            <div>This is the toolbox!!!</div>
            <div className="innerTB">
                <Skill name="React" icon={{FaReact}}/>
                <Skill name="Redux"/>
                <Skill name="React"/>
                <Skill name="Sass"/>
                <Skill name="MongoDB"/>
                <Skill name="Firebase"/>
                <Skill name="C++"/>
                <Skill name="PHP"/>
                <Skill name="Laravel"/>
                <Skill name="Python"/>
                <Skill name="Tensorflow"/>
                <Skill name="Keras"/>
                <Skill name="Pandas"/>
                <Skill name="Stata"/>
                <Skill name="SQL"/>
                <Skill name="React"/>

            </div>
        </div>
    );
}

export default Toolbox;