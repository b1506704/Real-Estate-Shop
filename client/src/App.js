import {React, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HouseCategory from './components/HouseCategory/HouseCategory';
import HouseList from './components/HouseList/HouseList';
import UserPage from './components/UserPage/UserPage';
import AdminPage from './components/AdminPage/AdminPage';
import HeadingTitle from './components/HeadingTitle/HeadingTitle';
import LoadingContainer from './utils/LoadingContainer/LoadingContainer';
import Footer from './components/Footer/Footer';
import {fetchHouse, fetchCategory, fetchUser, fetchSchedule, setIsLoading } from './actions/user_actions';
import './App.css';

const App = () => {
    const dispatch = useDispatch();
    const storeState = useSelector ((state) => state.user_reducer);
    const loginInfo = useSelector((state) => state.user_reducer.loggedInUser);
    const [title, setTitle] = useState("Dịch vụ mua bán bất động sản Real Estate");
    const [subTitle, setSubTitle] = useState("Giao dịch uy tín, nhanh chóng");
    
    console.log(storeState);
    
    
    useEffect(()=> {
        dispatch(setIsLoading(true));
        dispatch(fetchHouse());
        dispatch(fetchUser());
        dispatch(fetchSchedule());
        dispatch(fetchCategory()).then(() => dispatch(setIsLoading(false)));    
    },[]);
    
    if (loginInfo!= null && loginInfo.isAdmin === true) {
        return (<AdminPage userName ={loginInfo.userName}/>);
    } else if (loginInfo!= null && loginInfo.isAdmin === false){
        return (
            <UserPage user={loginInfo}/>
        );
    } else if (loginInfo === undefined || loginInfo === null){
        return(
            <div>
                <Switch>
                    <Route exact path="/">
                        <NavBar/>
                        <main>
                            <HeadingTitle title={title} subtitle={subTitle} />
                            <HouseCategory/>
                            <HouseList/>
                            <Footer/>
                        </main>
                    </Route>
                </Switch>
            </div>
        );
    } else {
        return (<LoadingContainer style={"spinner"}/>)
    }
}

export default App;