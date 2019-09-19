import React, { useState} from 'react';
import SidebarMenu from '../components/sidebar_menu';
import ContentPanel from "../components/content_panel";

function MainLayout() {
    const [sideMenuCardName, setSideMenuCardName] = useState('')
    console.log('sideMenuCardName', sideMenuCardName)
    const cardHandler = name=> {
        setSideMenuCardName(name)
    }
  return (
    <div className="ss-main-container">
        <div className="ss-sidebar">
            <SidebarMenu cardFlip={cardHandler}/>
        </div>
        <div className="ss-content">
            <ContentPanel sideMenuCardName={sideMenuCardName}/>
        </div>
    </div>
  );
}

export default MainLayout;
