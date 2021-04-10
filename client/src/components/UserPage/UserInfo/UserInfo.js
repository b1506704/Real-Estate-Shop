import React, {useEffect, useRef, useState} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { getUser, createHouse, setNotification } from '../../../actions/user_actions';
import FileBase from 'react-file-base64';
import random from '../../../utils/RandomNumber';

import './UserInfo.css';

const UserInfo = () => {
    const dispatch = useDispatch();
    const [currentImg, setCurrentImg] = useState(null);
    const currentCategory = useSelector((state) => state.user_reducer.categoryList);
    const houseInputRef = 
    {
        categoryRef: useRef(null),
        priceRef: useRef(null),
        area: useRef(null),
        front: useRef(null),
        direction: useRef(null),
        address: useRef(null),
    };
    const currentLoginUser = useSelector((state) => state.user_reducer.login);
    const user = useSelector((state) => state.user_reducer.currentUser);
    
    useEffect(()=> {
        if (currentLoginUser) {
            dispatch(getUser(currentLoginUser.userName));
        }
    },[currentLoginUser]);

    const onHouseUpload = () => {
        const uploadHouse = 
        {
            id: random(1,10000),  
            price: houseInputRef.priceRef.current.value || null,
            category: houseInputRef.categoryRef.current.value || null,
            imgUrl:  currentImg ? currentImg : null,
            houseSeller:  user ? user.userName : null,
            area: houseInputRef.area.current.value || null,
            front: houseInputRef.front.current.value || null,
            direction: houseInputRef.direction.current.value || null,
            address: houseInputRef.address.current.value || null
        };
        dispatch(createHouse(uploadHouse));
        
    }

    const refresh = () => {
        dispatch(getUser(currentLoginUser.userName))
        .then(() => dispatch(setNotification("Làm mới thành công")));
    }

    return(
        <div className="user_info_container shadow">
            <h2 className="icon"> {"||"} </h2>
            <h2 className="title"> { user ? user.userName : null} Panel </h2>
            <div className="info_panel">
                <div> 
                    <button type="button" className="shadow neon" onClick={refresh}> Làm mới </button>
                </div>
                
                {currentLoginUser && currentLoginUser.isAdmin === true ?
                <> 
                <div style={{color: "yellow"}}> Thu nhập: { user ? user.balance : null} VND</div>
                <div> Nhà đã bán được: &nbsp; {user ? JSON.stringify(user.houseSellList, user.houseSellList, 2) : null} </div> 
                </>
                : null}
                
                {currentLoginUser && currentLoginUser.isAdmin === false ?
                    <> 
                        <div> Địa chỉ email: { user ? user.email : null}</div>
                        <div style={{color: "yellow"}}> Mã thẻ ngân hàng: { user ? user.bankID : null}</div>
                        <div style={{color: "yellow"}}> Ngân hàng: { user ? user.bankProvider : null}</div>
                        <div style={{color: "yellow"}}> Số dư tài khoản: { user ? user.balance : null} Tỷ VND</div>
                        <div> Nhà đã mua: &nbsp; {user ? JSON.stringify(user.houseOwnList, user.houseOwnList,2) : null}</div>
                        <div> Nhà đã bán được: &nbsp; {user ? JSON.stringify(user.houseSellList, user.houseSellList,2) : null} </div>
                        <div style={{backgroundColor: "black", paddingLeft: "15vh"}}> Đăng tin bán nhà </div>
                        <div> Loại nhà: &nbsp; 
                            <select ref={houseInputRef.categoryRef}>
                                { currentCategory != null 
                                ? currentCategory.map((ele, key) => (<option value={ele.name} key={key}>{ele.name}</option>))
                                : null
                                }
                            </select>
                        </div>
                        <div> Giá: &nbsp;
                            <input ref={houseInputRef.priceRef} type="text"></input>
                        </div>
                        <div> Diện tích:&nbsp;
                            <input ref={houseInputRef.area} type="text"></input>
                        </div>
                        <div> Mặt tiền:&nbsp;
                            <input ref={houseInputRef.front} type="text"></input>
                        </div>
                        <div> Hướng:&nbsp;
                            <input ref={houseInputRef.direction} type="text"></input>
                        </div>
                        <div> Vị trí:&nbsp;
                            <input ref={houseInputRef.address} type="text"></input>
                        </div>
                        <div>
                            Upload hình ảnh:
                            <FileBase className="base64"  type="file" multiple={false} onDone = {({base64}) => {setCurrentImg(base64)}}></FileBase>  
                        </div>
                        <div>
                            <img className="image" alt="Chọn ảnh để upload" src={currentImg}/>
                        </div>
                        <div> 
                            <button type="button" className="shadow neon" onClick={onHouseUpload}> Đăng tin </button>
                        </div>
                    </>
                    : null
                }
            </div>
        </div>
    );
}
export default UserInfo;