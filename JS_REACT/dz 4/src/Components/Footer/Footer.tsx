import { useState } from 'react';
import './Footer.scss';

const Footer = () => {

    
    let newDate = new Date();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const Interval = () => {

        if(newDate.getDate() < 10){
            setDate(`0${newDate.getDate()}:${newDate.getMonth()+1}:${newDate.getFullYear()}`);
        }
        else{
             setDate(`${newDate.getDate()}:${newDate.getMonth()+1}:${newDate.getFullYear()}`);
        };

        if(newDate.getSeconds() < 10){
            setTime(`${newDate.getHours()}:${newDate.getMinutes()}:0${newDate.getSeconds()}`);
        }
        else{
            setTime(`${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);
        }
    };

    setInterval(Interval, 1000);
    
    return( 
        <div className='footer'>
            <h3>{date}</h3>
            <h3>Lviv_Ukraine_2022</h3>
            <h3>{time}</h3>
        </div>
    )
};

export default Footer;