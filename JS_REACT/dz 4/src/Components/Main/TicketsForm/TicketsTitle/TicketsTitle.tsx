import React, { useState } from "react";
import './TicketsTitle.scss'

const TicketsTitle = (props: { updateTicketsList: (arg0: { title: string; date: string; type: string; price: number; sold: string; id: string; }) => void; }) => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState(0);
    const [sold, setSold] = useState('Не продано');
    const [check, setCheck] = useState(false);

    const handleTitleChange = (event: { target: { value: React.SetStateAction<string>; }; }) =>{
        setTitle(event.target.value);
        setTitleValue(event.target.value );
    };

    const handleDateChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setDate(event.target.value);
        setDateValue(event.target.value );
    };

    const handleTypeChaenge = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        if(event.target.value !== 'flight'){
            setType(event.target.value);
            setTypeValue(event.target.value );
        }
        else{
            setType('');
        }
    };

    const handlePriceChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setPrice(event.target.value as unknown as number);
        setPriceValue(event.target.value );
    };

    const handleCheckChange = () => {

        setCheck(!check);

        if(check === false){
            setSold('Продано');
        }
        else{
            setSold('Не продано')
        }
    };

    const generation = () => {
        return Math.round(Math.random()* 10e2) + '-' + price;
    };

    const [titleValue, setTitleValue] = useState('');
    const [dateValue, setDateValue] = useState('');
    const [typeValue, setTypeValue] = useState('');
    const [priceValue, setPriceValue] = useState('');


    const createBtn = () => {

        if(title !== '' && date !== '' && type !== '' && price !== 0 ){
            props.updateTicketsList({
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
            setPriceValue('');

            setTitle('');
            setDate('');
            setType('');
            setPrice(0);

            setCheck(false);
            setSold('Не продано');
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

export default TicketsTitle;