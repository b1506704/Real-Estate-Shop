import {React, useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import AccountCategory from './components/AccountCategory/AccountCategory';
import AccountList from './components/AccountList/AccountList';
import HeadingTitle from './components/HeadingTitle/HeadingTitle';
import AdminPage from './components/AdminPage/AdminPage';
import UserPage from './components/UserPage/UserPage';
import './App.css';

const App = () => {
    const [welcomeMsg, setWelcomeMsg] = useState("Dịch vụ mua bán bất động sản RealEstate ");
    const [welcomePara, setWelcomePara] = useState("Giao dịch uy tín, nhanh chóng");
    // dữ liệu để test, chưa nối kết database
    const [user, setUser] = useState({ userName: 'user101', passWord: 'user101', cardBalance: 1500000});
    const [admin, setAdmin] = useState({ userName: 'admin', passWord: '123456'});
    //quan sát state của redux store trên console của trình duyệt
    const buyHouseInfo = useSelector((state) => state.user_reducer.account);
    const loginInfo = useSelector((state) => state.user_reducer.login);
    const registerInfo = useSelector((state) => state.user_reducer.register);
    const creditInfo = useSelector((state) => state.user_reducer.credit);
    const houseFilter = useSelector((state) => state.user_reducer.filterCategory);
    
    console.log('House bought:' + JSON.stringify(buyHouseInfo));
    console.log('Login:' + JSON.stringify(loginInfo));
    console.log('Register:' + JSON.stringify(registerInfo));
    console.log('Credit:' + JSON.stringify(creditInfo));
    console.log('Browse:' + JSON.stringify(houseFilter));

    if (loginInfo!= null 
        && loginInfo.userName === admin.userName 
        && loginInfo.passWord === admin.passWord) {
            return (<AdminPage userName ={admin.userName}/>);
    } else if (loginInfo!= null 
                && loginInfo.userName === user.userName 
                && loginInfo.passWord === user.passWord){
        return (<UserPage userName ={user.userName} balance={user.cardBalance}/>);
    } else {
        return(
            <div>
                <NavBar/> 
                <HeadingTitle title={welcomeMsg} subtitle={welcomePara} />
                <AccountCategory/>
                <AccountList/>
                <Footer/>
            </div>
        );
    }
}

export default App;