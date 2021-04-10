import React from 'react';

import NavBar from '../NavBar/NavBar';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import HouseCategory from '../HouseCategory/HouseCategory';
import HouseList from '../HouseList/HouseList';
import Footer from '../Footer/Footer';

const UserPage = ({user}) => {
    return(
        <div>
            <NavBar userName={user.userName} userMode="user"/>
            <HeadingTitle title={`Chào mừng ${user.userName} đến với sàn giao dịch`} subtitle={"Giao dịch uy tín, chất lượng"}/>
            <HouseCategory/>
            <HouseList/>
            <Footer/>
        </div>
    );
}
export default UserPage;