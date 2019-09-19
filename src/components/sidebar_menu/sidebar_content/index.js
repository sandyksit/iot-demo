import React from 'react';
import './index.css';

const SidebarContent = props => {
    const {flip, onFlip, content} = props
    const { name, icon, category, id } = content;
  
    return (
        <div className="ss-image-container" data-id={id} onClick={onFlip.bind(this, id, name)}>
            <div className={`ss-image-wrapper ${flip === id ? 'active': ''}`}>
                <img src={require(`../../../assets/${icon}.png`)} alt="" />
                
                <div className= {`ss-chevron-right ${flip === id ? 'active': ''}`}>
                <img src={require(`../../../assets/chevron-right.png`)} alt="" />
                </div>
            </div>
            <div className={`ss-info-wrapper ${flip === id ? 'active': ''}`}>
                <div className="ss-info-desc">
                    <div className="ss-info-header">{name}</div>
                    <div className="ss-info-category">{category}</div>
                </div>
            </div>

        </div>
    );
}

export default SidebarContent;
