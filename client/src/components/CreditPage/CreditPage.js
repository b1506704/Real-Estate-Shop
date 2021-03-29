import { React, useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import {addCredit} from '../../actions/user_actions';
import './CreditPage.css';

const CreditPage = ({close}) => {
    const [creditInfo, setCreditInfo] = useState({
        creditID: '',
        creditBank: ''
    });
    const dispatch = useDispatch();
    const modalRef = useRef();
    
    useEffect(() => {
        scrollToModal();
    },[close]);
    
    const scrollToModal = () => {
        modalRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start", 
          inline: "nearest"
        });
      };
    const creBank = ["BIDV","Agribank","Sacombank"];
    const [selectedCreBank, setSelectedCreBank] = useState(creBank[0]);

    const onCreBankChange = (e) => {
        const value = e.target.value;
        setSelectedCreBank(creBank.find((e) => e === value));
    }
    
    useEffect(() => {
        dispatch(addCredit(creditInfo));
    },[creditInfo, setCreditInfo]);

    

    const handleSaveCredit = () => {
        //
    }
    return(
        <div className="credit_container drop_shadow">
            <div ref={modalRef} className="scroll_position_holder"></div>
            <h1>Thông tin thẻ</h1>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    setCreditInfo({creditID: e.target.ma_the.value, creditBank: selectedCreBank});
                }}>
                <div>
                    <label>Mã thẻ:</label>
                    <input type="text" autoFocus={true} name="ma_the"></input>
                </div>
                <div>
                    <label>Ngân hàng:</label>
                    <select value={selectedCreBank} onChange={onCreBankChange}>
                        {creBank.map((item, key) => (
                            <option value={item} key={key}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                
                <div className="button_container">
                    <input type="submit" className="drop_shadow" value="Lưu" onClick={handleSaveCredit}></input>
                    <input type="button" className="drop_shadow" value="Thoát" onClick={close}></input>
                </div>
            </form>
            
        </div>
    );
}
export default CreditPage;