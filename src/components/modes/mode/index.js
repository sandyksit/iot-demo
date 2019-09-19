import React from 'react';
import './index.css';

const Modes = props => {
    const { id, modeName, percentile, icon, tick } = props.modeContent
    return (
        <div className={`ss-mode-container ${id === 0 ? 'active': ''}`}>
            <div className="row">
                <div className="col-1 icon-wrapper"><img src={require(`../../../assets/${icon}.png`)} alt="" /></div>
                <div className="col-5">{modeName}</div>
                <div className="col-3 col-md-5">{percentile}</div>
                <div className="col-2 col-md-1 tick-wrapper"><img src={require(`../../../assets/${tick}.png`)} alt="" /></div>
            </div>
        </div>
    );
}

export default Modes;
