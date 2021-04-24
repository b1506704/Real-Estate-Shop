import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import GoogleMap from '../../utils/GoogleMap/GoogleMap';
import './HouseDetail.css';

const HouseDetail = () => {
    const modalRef = useRef();
    const dateRef = useRef(null);
    const dispatch = useDispatch();
    const {id} = useParams();
    const userList = useSelector((state) => state.user_reducer.userList);
    const houseList = useSelector((state) => state.user_reducer.houseList);
    const house = houseList.find((house) => house.id === id);
    const onSubmitSchedule = (e) => {
        e.preventDefault();

    }
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
        <div className="detail_page">
            <div ref={modalRef} className="scroll_position_holder"></div>
            <div className="house_message shadow">
                {house.message}            
            </div>
            <div className="house_detail">
                <div className="detail_image shadow">
                    <img className="image" alt="Loading..." src={house.imgUrl}/>
                </div>
                <div className="detail_info">
                    <div style={{color: "yellow"}}>Người bán:&nbsp; {house.houseSeller}</div>
                    <div> Loại nhà: &nbsp; 
                        {house.category}
                    </div>
                    <div> Giá: &nbsp;
                        { house.price + " Tỷ VND"}
                    </div>
                    <div> Diện tích:&nbsp;
                    { house.area + " m2" }
                    </div>
                    <div> Mặt tiền:&nbsp;
                    { house.front + " m2" }
                    </div>
                    <div> Hướng:&nbsp;
                    { house.direction }
                    </div>
                    <div> Địa chỉ:&nbsp;
                            {house.address}
                    </div>
                    <div> Toạ độ Lat:&nbsp;
                            {house.lat}
                    </div>
                    <div> Toạ độ Lng:&nbsp;
                            {house.lng}
                    </div>
                    <form className="add_schedule" onSubmit={(e) => onSubmitSchedule(e)}>
                        <div>Chọn lịch hẹn</div>
                        <input ref={dateRef} type="date" required></input>
                        <input type="submit" value="Đặt lịch hẹn"></input>
                    </form>
                </div>
            </div>
            <div className="map_container">
                <div className="house_message shadow">
                    Vị trí trên Google Map
                </div>
                <GoogleMap className="map" lat={house.lat} lng={house.lng}/>
            </div>
        </div>
    );
}
export default HouseDetail;