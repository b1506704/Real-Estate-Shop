import {React, useState} from 'react';

import Card from './Card/Card';
import './CardPage.css';

const CardPage = ({context}) => {
    //dữ liệu tạm, chưa kết nối db
    const [house, setAcc] = useState([
        {id: '#A33',  price: 1.5, isBought: false, houseOwner:'test' },
        {id: '#B02', price: 7, isBought: true, houseOwner:'test2'},
        {id: '#C03', price: 9, isBought: false, houseOwner:'test3'},
        {id: '#D04', price: 2.4, isBought: false, houseOwner:'test'},
        {id: '#E05', price: 3.2, isBought: true, houseOwner:'test4'},
        {id: '#F06', price: 3.5, isBought: false, houseOwner:'test'},
        {id: '#G07', price: 1, isBought: true, houseOwner:'test'},
        {id: '#H08', price: 1.7, isBought: false, houseOwner:'test2'},
    ]);
    const [category, setCategory] = useState([
        {name: 'Chung cư', houseNum: 25, sellNum: 10},
        {name: 'Biệt thự', houseNum: 15, sellNum: 5},
        {name: 'Căn hộ cho thuê', houseNum: 5, sellNum: 1}]);
    
    switch (context) {
        case "list":
            return(
                <div className="card_page">
                    <p> <b>Danh sách nhà bán</b> </p>
                    <div className="card_container">
                        {
                            house.map ((item,key) => 
                            (<Card key={key} house={item} type={"acc"} mode={"view"}/>))
                        }
                    </div>
                </div>
            );
        case "category":
            return(
                <div className="card_page">
                    <p> <b>Loại nhà bán</b> </p>
                    <div className="card_container">
                        {
                            category.map ((item,key) => 
                            (<Card key={key} category={item} type={"category"} mode={"view"}/>))
                        }
                    </div>
                </div>
            );
        case "edit_category":
            return(
                <div className="card_page">
                    <p> <b>Quản lý loại nhà</b> 
                        <button type="button" className="add_button drop_shadow"> &#x2b; </button>
                    </p>
                    <div className="card_container">
                        {
                            category.map ((item,key) => 
                            (<Card key={key} category={item} type={"category"} mode={"edit"}/>))
                        }
                    </div>
                </div>
            );   
        case "edit_list":
            return(
                <div className="card_page">
                    <p> <b>Quản lý nhà</b> 
                        <button type="button" className="add_button drop_shadow"> &#x2b; </button>
                    </p>
                    <div className="card_container">
                        {
                            house.map ((item,key) => 
                            (<Card key={key} house={item} type={"acc"} mode={"edit"}/>))
                        }
                    </div>
                </div>
            );             
        default:
            return (<div> Loading... </div>);
    }
}
export default CardPage;