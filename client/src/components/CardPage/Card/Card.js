import {React, useState} from 'react';
import {useDispatch} from 'react-redux';

import {buyHouse, filterHouse} from '../../../actions/user_actions';
import './Card.css';
import exampleImg from '../../../assets/imgs/sample.jpg'; 

//id: id của nhà 
//name: tên của loại game
//price: giá của nhà
//type: kiểu của Card là nhà hay loại nhà
//mode: Card thuộc trang User hay trang Admin
//isBought: tình trạng đã bán hay chưa của nhà
//accNum: số nhà hiện có
//sellNum: số nhà đã bán
const Card = ({house, category, type, mode}) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] =useState(false);
    
    const onCardSelect = () => {
      if (type === "acc") {
        dispatch(buyHouse(house));
        // import modal thông báo
        
        //
      } else {
        dispatch(filterHouse(category.name));
      }
    }
    const onCardEdit = () => {
      setIsEdit(true);
    }
    return (
      <div className="card_detail drop_shadow">
        <div className="title_bar drop_shadow neon_effect">
          { type === "acc" ? house.id : category.name }            
        </div>
        { 
          type === "acc" 
          ? <div className="acc_info">
              <div> Loại nhà: </div>
              <div> Giá: {house.price} Tỷ VND </div>
              {
                mode === "edit"
                ? <div> 
                    <div>Người mua: {house.accOwner}</div>
                    <div>Tình trạng: {house.isBought ? "Đã bán" : "Chưa bán"}</div>
                  </div>
                : null
              }
              <div> Diện tích: </div>
              <div> Mặt tiền: </div>
              <div> Hướng: </div>
              <div> Vị trí: </div>
              
            </div>
          : <div className="acc_info">
              <div> Số lượng: {category.houseNum}</div>
              <div> Đã bán: {category.sellNum}</div>
            </div>   
        }
        {
          mode === "view"
          ?  <button type="button" className="price_button drop_shadow neon_effect" onClick={onCardSelect}>
               {type === "acc" ? <>&#x1F6D2;</> : <>&#x1F50D;</>}
            </button>
          : <button type="button" className="price_button drop_shadow neon_effect" onClick={onCardEdit}>
              &#x270e;         
            </button>
        }
        <div className="image_container">
          <img className="image" alt="Loading..." src={exampleImg}/>
        </div>
      </div>
    );
};
export default Card;