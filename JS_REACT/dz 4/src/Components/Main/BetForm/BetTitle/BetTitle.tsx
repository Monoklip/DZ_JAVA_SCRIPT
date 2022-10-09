import { SetStateAction, useState } from 'react';
import './BetTitle.scss';

const BetTitle = (props: { updateBetList: (arg0: { team1: string; team2: string; num1: number; num2: number; result: string; check1: boolean; }) => void; }) => {

    const [team1, setTeam1] = useState('Виберіть команду');
    const [team2, setTeam2] = useState('Виберіть команду');
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [result, setResult] = useState('');
    const [num1, setNum1] = useState(Math.round(Math.random()*5));
    const [num2, setNum2] = useState(Math.round(Math.random()*5));
    const [valueTeam1, setValueTeam1] = useState('');
    const [valueTeam2, setValueTeam2] = useState('');

    const BetTeam1 = (event: { target: { value: SetStateAction<string>; }; }) => {
        setTeam1(event.target.value);
        setValueTeam1(event.target.value);
    };

    const BetTeam2 = (event: { target: { value: SetStateAction<string>; }; }) => {
        setTeam2(event.target.value);
        setValueTeam2(event.target.value);
    };

    const checketChange1 = () => {
        
        if(check1 !== true){
            setCheck1(!check1);
            setCheck2(false);
            setCheck3(false);
            
            if(num1 > num2){
                setResult('Вітаємо, ви виграли!');
            }
            else if(num1 < num2){
                setResult('Нажаль ваша команда програла');
            }
            else if(num1 === num2){
                setResult('Нічия, повезе наступного разу');
            }
        }
    };

    const checketChange2 = () => {
        
        if(check2 !== true){
            setCheck2(!check2);
            setCheck1(false);
            setCheck3(false);
            
            if(num1 === num2){
                setResult('Вітаємо, ви виграли!');
            }
            else if(num1 < num2){
                setResult('Нажаль одна з команд перемогла');
            }
            else if(num1 > num2){
                setResult('Нажаль одна з команд перемогла');
            }
        }
    };

    const checketChange3 = () => {
        
        if(check3 !== true){
            setCheck3(!check3);
            setCheck1(false);
            setCheck2(false);
            
            if(num1 < num2){
                setResult('Вітаємо, ви виграли!');
            }
            else if(num1 > num2){
                setResult('Нажаль ваша команда програла');
            }
            else if(num1 === num2){
                setResult('Нічия, повезе наступного разу');
            }
        }
    };

    const createBet = () => {
        if(team1 !== 'Виберіть команду' && team2 !== 'Виберіть команду' && (check1 !== false || check2 !== false || check3 !== false)){

            if(team1 !== team2){
                props.updateBetList({
                    team1: team1,
                    team2: team2,
                    num1: num1,
                    num2: num2,
                    result: result,
                    check1: check1,
                });
        
                setNum1(Math.round(Math.random()*5));
                setNum2(Math.round(Math.random()*5));
        
                setCheck1(false);
                setCheck2(false);
                setCheck3(false);
    
                setTeam1('Виберіть команду');
                setTeam2('Виберіть команду');
    
                setValueTeam1('');
                setValueTeam2('');
            }
            else{
                alert('Виберіть різні команди');
            };
        }
        else{
            alert('Заповніть всі поля');
        }
    };

    return(
        <div>
            <div className="team">
                <div className="team1">
                    <p>Команда №1</p>
                    <select className='inputTeam1' name="" id="" onChange={BetTeam1} value={valueTeam1}>
                        <option value="Виберіть команду">Виберіть команду</option>
                        <option value="Shakhtar Donetsk">Shakhtar Donetsk</option>
                        <option value="Dynamo Kyiv">Dynamo Kyiv</option>
                        <option value="Real Madrid">Real Madrid</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Atletico Madrid">Atletico Madrid</option>
                        <option value="Valencia">Valencia</option>
                        <option value="FC Sevilla">FC Sevilla</option>
                        <option value="Milan">Milan</option>
                        <option value="Juventus">Juventus</option>
                        <option value="Roma">Roma</option>
                        <option value="FC Napoli">FC Napoli</option>
                        <option value="FC Lazio">FC Lazio</option>
                        <option value="Manchester City">Manchester City</option>
                        <option value="Manchester United">Manchester United</option>
                        <option value="Liverpool">Liverpool</option>
                        <option value="Chelsea">Chelsea</option>
                        <option value="Arsenal">Arsenal</option>
                        <option value="Everton">Everton</option>
                        <option value="West Ham">West Ham</option>
                        <option value="Bayern Munich">Bayern Munich</option>
                        <option value="Borussia Dortmund">Borussia Dortmund</option>
                        <option value="Bayer Leverkusen">Bayer Leverkusen</option>
                        <option value="FC Schalke 04">FC Schalke 04</option>
                        <option value="PSG">PSG</option>
                        <option value="AS Monaco">AS Monaco</option>
                        <option value="FC Lyon">FC Lyon</option>
                    </select>
                </div>
                <div className="option">
                    <div className="radioTeam">
                        <input type="checkbox" checked={check1} onChange={checketChange1}/>
                        <p>Перемога команди №1</p>
                    </div>
                    <div className="radioTeam">
                        <input type="checkbox" checked={check2} onChange={checketChange2}/>
                        <p>Нічия</p>
                    </div>
                    <div className="radioTeam">
                        <input type="checkbox" checked={check3} onChange={checketChange3}/>
                        <p>Перемога команди №2</p>
                    </div>
                </div>
                <div className="team2">
                    <p>Команда №2</p>
                    <select className='inputTeam2' name="" id="" onChange={BetTeam2} value={valueTeam2}>
                    <option value="Виберіть команду">Виберіть команду</option>
                        <option value="Shakhtar Donetsk">Shakhtar Donetsk</option>
                        <option value="Dynamo Kyiv">Dynamo Kyiv</option>
                        <option value="Real Madrid">Real Madrid</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Atletico Madrid">Atletico Madrid</option>
                        <option value="Valencia">Valencia</option>
                        <option value="FC Sevilla">FC Sevilla</option>
                        <option value="Milan">Milan</option>
                        <option value="Juventus">Juventus</option>
                        <option value="Roma">Roma</option>
                        <option value="FC Napoli">FC Napoli</option>
                        <option value="FC Lazio">FC Lazio</option>
                        <option value="Manchester City">Manchester City</option>
                        <option value="Manchester United">Manchester United</option>
                        <option value="Liverpool">Liverpool</option>
                        <option value="Chelsea">Chelsea</option>
                        <option value="Arsenal">Arsenal</option>
                        <option value="Everton">Everton</option>
                        <option value="West Ham">West Ham</option>
                        <option value="Bayern Munich">Bayern Munich</option>
                        <option value="Borussia Dortmund">Borussia Dortmund</option>
                        <option value="Bayer Leverkusen">Bayer Leverkusen</option>
                        <option value="FC Schalke 04">FC Schalke 04</option>
                        <option value="PSG">PSG</option>
                        <option value="AS Monaco">AS Monaco</option>
                        <option value="FC Lyon">FC Lyon</option>
                    </select>                   
                </div>
            </div>
            <div className="divBtn">
                <button className='btn' onClick={createBet}>Зробити ставку</button>
            </div>
        </div>
    )
};
export default BetTitle;