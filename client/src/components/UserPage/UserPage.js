import React from 'react';
import { Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import HouseCategory from '../HouseCategory/HouseCategory';
import HouseList from '../HouseList/HouseList';
import Footer from '../Footer/Footer';

const UserPage = ({user}) => {
    return(
        <div>
            <main>
                <Switch>
                    <Route exact path="/">
                        <HeadingTitle title="User Page" subtitle="Trang giao dịch mua bán nhà đất"/>
                        <NavBar userName={user.userName} userMode="user"/>
                        <HouseCategory/>
                        <HouseList/>
                        <Footer/>
                    </Route>
                    <Route path="/schedule">
                        <HeadingTitle title="User Page" subtitle="Trang giao dịch mua bán nhà đất"/>
                        <NavBar userName={user.userName} userMode="user"/>
                        <Footer/>
                    </Route>
                    <Route path="/house">
                        <HeadingTitle title="User Page" subtitle="Trang giao dịch mua bán nhà đất"/>
                        <NavBar userName={user.userName} userMode="user"/>
                        <HouseList/>
                        <Footer/>
                    </Route>
                </Switch>
            </main>
        </div>
    );
}
export default UserPage;