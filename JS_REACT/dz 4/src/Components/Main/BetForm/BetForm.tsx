import { useState } from 'react';
import './BetForm.scss';
import BetOption from './BetOption/BetOption';
import BetTitle from './BetTitle/BetTitle';

const BetForm = () => {
    
    const betFromStorage = JSON.parse(localStorage.getItem('bet') as string) || [];
    const [bet, setBet] = useState(betFromStorage);

    const updateBetList = (newBet: any) => {
        setBet([...bet, newBet]);
        localStorage.setItem('bet', JSON.stringify([...bet, newBet]));
    };

    return(
        <div className='betForm'>
            <BetTitle updateBetList={updateBetList}/>
            <BetOption bet={bet}/>
        </div>
    )
};

export default BetForm;