import { React, useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import {register, setNotification} from '../../actions/user_actions';
import './RegisterPage.css';

const RegisterPage = ({close}) => {
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState({
        userName: '',
        passWord: '',
        gender: '',
        email: ''
    });
    const modalRef = useRef();

    useEffect(() => {
        if (userInfo.userName && userInfo.passWord && userInfo.email && userInfo.gender) {
            dispatch(register(userInfo));
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
        <div className="register_container shadow">
            <div ref={modalRef} className="scroll_position_holder"></div>
            <h1>Đăng Ký</h1>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    setUserInfo({userName: e.target.username.value, passWord:e.target.password.value, email: e.target.email.value});
                    if (userInfo.gender === '') dispatch(setNotification("Vui lòng chọn giới tính"));
                }}>
                <div>
                    <label>Tên Đăng Ký:</label>
                    <input type="text" autoFocus={true} required minLength={1} maxLength={8} name="username" placeholder="<=8 ký tự"></input>
                </div>
                <div>
                    <label>Tên Đầy Đủ:</label>
                    <input type="text" autoFocus={true} required minLength={1} name="full_name"></input>
                </div>
                <div>
                    <label>Nam: </label>
                    <input 
                        type="radio" 
                        checked={userInfo.gender === 'male'} 
                        onChange={() => setUserInfo({...userInfo, gender: 'male'})}
                        value="male" 
                         
                        name="male">
                    </input>
                    <label>Nữ: </label>
                    <input 
                        type="radio" 
                        checked={userInfo.gender === 'female'} 
                        onChange={() => setUserInfo({...userInfo, gender: 'female'})}
                        value="female" 
                         
                        name="female">
                    </input>
                </div>
                {/* <div>
                </div> */}
                <div>
                    <label>Mật Khẩu </label>
                     <input type="password" name="password" required minLength={1} maxLength={12} placeholder="<=12 ký tự"></input>
                </div>
                <div>
                    <label>Nhập Lại Mật Khẩu </label>
                    <input type="password" name="re_password" required minLength={1} maxLength={12} placeholder="<=12 ký tự"></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" required pattern="[A-Za-z0-9]+@gmail.com" placeholder="abc@gmail.com" name="email"></input>
                </div>
                <div className="button_container">
                    <input type="submit" className="shadow" value="OK"></input>
                    <input type="button" className="shadow" value="Thoát" onClick={close}></input>
                </div>
            </form>
        </div>
    );
}
export default RegisterPage;