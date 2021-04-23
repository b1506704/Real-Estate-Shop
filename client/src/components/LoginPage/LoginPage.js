import { React, useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import {login} from '../../actions/user_actions';
import './LoginPage.css';

const LoginPage = ({close}) => {
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState({
        userName: '',
        passWord: '',
    });
    const [isRemember, setIsRemember] = useState(false);
    const modalRef = useRef();

    useEffect(() => {
        if (userInfo.userName && userInfo.passWord) {
            dispatch(login(userInfo));
        }
    },[userInfo, setUserInfo]);

    useEffect(() => {
        scrollToModal();
    });
    
    const scrollToModal = () => {
        modalRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start", 
          inline: "nearest"
        });
      };
    return(
        <div className="login_container drop_shadow">
            <div ref={modalRef} className="scroll_position_holder"></div>
            <h1>Đăng Nhập</h1>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    setUserInfo({userName: e.target.username.value, passWord:e.target.password.value});
                }}>
                <div>
                    <label>Tên Đăng Nhập:</label>
                    <input type="text" autoFocus={true} required minLength={1} maxLength={8} placeholder="<=8 ký tự" name="username"></input>
                </div>
                <div>
                    <label>Mật Khẩu:</label>
                    <input type="password" required minLength={1} maxLength={8} placeholder="<=8 ký tự" name="password"></input>
                </div>
                <div>
                    <label>Nhớ Tài Khoản:</label>
                    <input type="checkbox" name="remember_acc" onClick={() => setIsRemember(true)}></input>
                    <a>Quên Mật Khẩu</a>
                </div>
                <div className="button_container">
                    <input type="submit" className="drop_shadow" value="OK"></input>
                    <input type="button" className="drop_shadow" value="Thoát" onClick={close}></input>
                </div>
            </form>
        </div>
    );
}
export default LoginPage;