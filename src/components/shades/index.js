import React, { Fragment } from 'react';
import Checkbox from "../checkbox/index"
import './index.css';

function Shades() {
    const colors = [{
        colorCode: 'bright-red'
    },
    {
        colorCode: 'bright-purple'
    },
    {
        colorCode: 'light-blue'
    }, {
        colorCode: 'vivid-blue'
    }, {
        colorCode: 'light-pink'
    }]

    return (
        <Fragment>
            <div className="ss-shades-header">
                <span className="ss-shades-text">
                   Shades
                </span>
            </div>
            <div className="ss-shades-container">
                {colors.map((chk, index) => {
                    return (
                        <Checkbox {...chk} key={index} />)
                })}
            </div>
        </Fragment>
    );
}

export default Shades;
