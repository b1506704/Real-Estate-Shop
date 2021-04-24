import React, { Suspense } from 'react';
import { Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import HouseCategory from '../HouseCategory/HouseCategory';
import HouseList from '../HouseList/HouseList';
import HouseDetail from '../HouseDetail/HouseDetail';
import Footer from '../Footer/Footer';
import LoadingContainer from '../../utils/LoadingContainer/LoadingContainer';

const UserPage = ({user}) => {
    return(
        <div>
            <main>
                <Suspense fallback={<LoadingContainer/>}>
                    <Switch>
                        <Route exact path="/">
                            <HeadingTitle title="Real Estate Service" subtitle="Trang giao dịch mua bán nhà đất"/>
                            <NavBar userName={user.userName} userMode="user"/>
                            <HouseCategory/>
                            <HouseList/>
                            <Footer/>
                        </Route>
                        <Route path="/schedule">
                            <HeadingTitle title="Chi tiết lịch hẹn" subtitle="Vui lòng xét duyệt lịch hẹn"/>
                            <NavBar userName={user.userName} userMode="user"/>
                            <Footer/>
                        </Route>
                        <Route exact path="/house">
                            <HeadingTitle title="Danh sách nhà bán" subtitle="Chọn đặt lịch hẹn để liên hệ người bán"/>
                            <NavBar userName={user.userName} userMode="user"/>
                            <HouseList/>
                            <Footer/>
                        </Route>
                        <Route path="/house/:id">
                            <HeadingTitle title="Thông tin chi tiết" subtitle="Vui lòng chọn ngày hẹn"/>
                            <NavBar userName={user.userName} userMode="user"/>
                            <HouseDetail/>
                            <Footer/>
                        </Route>
                    </Switch>
                </Suspense>
            </main>
        </div>
    );
}
export default UserPage;