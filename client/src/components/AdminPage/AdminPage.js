import React from 'react';
import { Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import EditHouseCategory from '../EditHouseCategory/EditHouseCategory';
import EditHouseList from '../EditHouseList/EditHouseList';
import Footer from '../Footer/Footer';
import './AdminPage.css';
import EditUser from '../EditUser/EditUser';

const AdminPage = ({userName}) => {
    return(
        <div>
            <main>
                <Switch>
                    <Route exact path="/">
                        <HeadingTitle title="Admin Page" subtitle="Trang quản lý database"/>
                        <NavBar userName={userName} userMode="admin"/>
                        <EditHouseList/>
                        <Footer/>
                    </Route>
                    <Route path="/edit_category">
                        <HeadingTitle title="Admin Page" subtitle="Trang quản lý database"/>
                        <NavBar userName={userName} userMode="admin"/>
                        <EditHouseCategory/>
                        <Footer/>
                    </Route>
                    <Route path="/edit_house">
                        <HeadingTitle title="Admin Page" subtitle="Trang quản lý database"/>
                        <NavBar userName={userName} userMode="admin"/>
                        <EditHouseList/>
                        <Footer/>
                    </Route>
                    <Route path="/edit_user">
                        <HeadingTitle title="Admin Page" subtitle="Trang quản lý database"/>
                        <NavBar userName={userName} userMode="admin"/>
                        <EditUser/>
                        <Footer/>
                    </Route>
                </Switch>
                
            </main>
        </div>
    );
}
export default AdminPage;