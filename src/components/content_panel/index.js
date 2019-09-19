import React from 'react';
import Shades from "../shades/index"
import Modes from "../modes/index"
import Intensity from "../intensity/index"
import Checkbox from "../checkbox/index"

import './index.css';

const ContentPanel = props => {
    return (
        <div className="ss-content-panel">
            <div className="row ss-content-panel_container">
                <div className="col-11"><span className="ss-content-panel_header">Device</span></div>
                <div className="col-1 ss-content-panel_container-align">
                    <div className="ss-content-panel_plus-icon">
                        <img src={require(`../../assets/plus-dk.png`)} alt="" />
                    </div>
                </div>
            </div>
            {props.sideMenuCardName && (<div className="row ss-toggle-container">
                <div className="col-11 ss-menu-content-name">{props.sideMenuCardName}</div>
                <div className="col-1 ss-toggle-align">
                    <Checkbox 
                        type="toggle" 
                        name="toggle" 
                        id="toggle" 
                        aria-label="hide/show" 
                        checked={true} 
                        />
                </div>
            </div>)}
            <div className="row"> <Shades/></div>
            <div className="row"> <Modes/></div>
            <div className="row"><Intensity/></div>
        </div>
    );
}

export default ContentPanel;
