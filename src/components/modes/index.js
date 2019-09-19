import React, { Fragment } from 'react';
import Mode from "../modes/mode/index"
import './index.css';
const modeData = require("../../test_data/mode.json")
function Modes() {
    return (
        <Fragment>
            <div className="ss-mode-header">
                <span className="ss-mode-text">
                    Mode
                </span>
            </div>
            <div className="ss-modes-container">
                {modeData.map((modeContent, index) => {
                    return (
                        <Mode modeContent={modeContent} key={index} />)
                })}
            </div>
        </Fragment>
    );
}

export default Modes;
