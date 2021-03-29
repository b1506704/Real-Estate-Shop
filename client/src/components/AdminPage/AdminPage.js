import React, { useEffect, useRef } from 'react';

import NavBar from '../NavBar/NavBar';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import EditHouseCategory from '../EditHouseCategory/EditHouseCategory';
import EditHouseList from '../EditHouseList/EditHouseList';
import Footer from '../Footer/Footer';
import './AdminPage.css';

const AdminPage = ({userName}) => {
    const topRef = useRef();
    useEffect(() => {
        scrollToModal();
    });
    const scrollToModal = () => {
        topRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start", 
          inline: "nearest"
        });
      };
    return(
        <div>
            <div ref={topRef} className="scroll_position_holder"></div>
            <NavBar userName={userName} userMode="admin"/>
            <HeadingTitle title="Admin Page" subtitle="Trang quản lý database"/>
            <EditHouseCategory/>
            <EditHouseList/>
            <Footer/>
        </div>
    );
}
export default AdminPage;