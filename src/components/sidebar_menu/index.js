import React, { Fragment, useState } from 'react';
import SidebarContent from './sidebar_content'
import './index.css';
const staticData = require("../../test_data/data.json")

const SidebarMenu = props => {
  const [flip, setFlip] = useState('')
  const onFlipHandler = (id, name) => {
    setFlip(id)
    props.cardFlip(name)
  }

  return (
    <Fragment>
      <div className="ss-back-icon">
        <img src={require(`../../assets/back-wh.png`)} alt="" />
      </div>
      <div className="ss-lr-padding">
        {
          staticData.map((content, index) => {
            return (<SidebarContent content={content} key={index} flip={flip} onFlip={onFlipHandler} />)
          })
        }
      </div>
    </Fragment>
  );
}

export default SidebarMenu;
