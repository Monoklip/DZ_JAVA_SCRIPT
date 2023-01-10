import './BetOption.scss';
import BetOptionList from './BetOptionList/BetOptionList';

const BetOption = (props: { bet: any[]; }) => {    

    if(props.bet.length){
        return(
            <>
                <div className='betOption'>
                    <div className="optionTeam1">Команда №1</div>
                    <div className="optionScore1">Голи</div>
                    <div className="dev">:</div>
                    <div className="optionScore2">Голи</div>
                    <div className="optionTeam2">Команда №2</div>
                    <div className="result">Результат</div>
                </div>
                {props.bet.map(bet => {
                    return <BetOptionList bet={bet} />
                })}
            </>
        )
    }
    else{
        return(
            <div>
                <h2 className='betError'>Список ставок пустий</h2>
            </div>
        )
    }
};

export default BetOption;