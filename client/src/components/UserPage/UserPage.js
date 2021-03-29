import React, { useEffect, useRef } from 'react';

import NavBar from '../NavBar/NavBar';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import HouseCategory from '../HouseCategory/HouseCategory';
import HouseList from '../HouseList/HouseList';
import Footer from '../Footer/Footer';
import './UserPage.css';

const UserPage = ({userName, balance}) => {
    return(
        <div>
            <NavBar userName={userName} userMode="user" balance= {balance}/>
            <HeadingTitle title={"Real Estate Shop"} subtitle={`Chào mừng ${userName} đến với Real Estate Shop`}/>
            <HouseCategory/>
            <HouseList/>
            <Footer/>
        </div>
    );
}
export default UserPage;