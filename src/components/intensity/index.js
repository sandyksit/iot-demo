import React, { Fragment } from 'react';

import './index.css';

function Intensity() {
    return (
        <Fragment>
            <div className="ss-intensity-header">
                <span className="ss-intensity-text">
                    Mode
                </span>
            </div>
            <div className="ss-half-circle">
            <div className="ss-percentile">64</div>
                <div className="ss-circle-pointer">
                </div>
            </div>

           
        </Fragment>
    );
}

export default Intensity;
