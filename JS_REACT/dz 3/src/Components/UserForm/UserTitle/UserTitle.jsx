import React, { useState } from "react";
import './UserTitle.scss'

const UserTitle = (props) => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState(0);
    const [sold, setSold] = useState('Не продано')
    const [check, setCheck] = useState(false);

    const handleTitleChange = (event) =>{
        setTitle(event.target.value);
        setTitleValue();
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
        setDateValue();
    };

    const handleTypeChaenge = (event) => {
        if(event.target.value != 'flight'){
            setType(event.target.value);
            setTypeValue();
        }
        else{
            setType('');
        }
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
        setPriceValue();
    };

    const handleCheckChange = () => {

        setCheck(!check);

        if(check == false){
            setSold('Продано');
        }
        else{
            setSold('Не продано')
        }
    };

    const generation = () => {
        return date + '_' + Math.round(Math.random()* 10e2) + '_' + price;
    };

    const [titleValue, setTitleValue] = useState();
    const [dateValue, setDateValue] = useState();
    const [typeValue, setTypeValue] = useState();
    const [priceValue, setPriceValue] = useState();


    const createBtn = () => {

        if(title != '' && date != '' && type != '' && price != '' ){
            props.updateUserList({
                title: title,
                date: date,
                type: type,
                price: price,
                sold: sold,
                id: generation(),
            });

            setTitleValue('');
            setDateValue('');
            setTypeValue('');
            setPriceValue('')

            setTitle('');
            setDate('');
            setType('');
            setPrice('');
        }
        else{
            alert('Заповніть всі поля');
        }
       
    };

    return(
        <div className="user-title">
            <input type="text" placeholder="Title" onChange={handleTitleChange} value={titleValue}/>
            <input className="date" type="date" onChange={handleDateChange} value={dateValue}/>
            <select className="select" name="flight" id="" onChange={handleTypeChaenge} value={typeValue}>
                <option value="flight">Виберіть рейс</option>
                <option value="Lviv - New York">Lviv - New York</option>
                <option value="Lviv - London">Lviv - London</option>
                <option value="Lviv - Madrid">Lviv - Madrid</option>
                <option value="Lviv - Berlin">Lviv - Berlin</option>
            </select>
            <input type="number" placeholder="Price" onChange={handlePriceChange} value={priceValue}/>
            <div className="sold">
                <input className="check" type="checkbox" checked={check} onChange={handleCheckChange}/>
                <span>Продано / не продано</span>
            </div>
            <button className="btn" onClick={createBtn}>Create</button>
        </div>
    )
}

export default UserTitle;