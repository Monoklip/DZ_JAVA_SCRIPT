import './BetOptionList.scss';

const BetOptionList = (props: { bet: { team1: any; team2: any; num1: any; num2: any; result: any; }; }) => {
    const {
        team1,
        team2,
        num1,
        num2,
        result,
    } = props.bet;

    return(
        <div>
             <div className="bet-option-list">
                <div className="betListTeam1">{team1}</div>
                <div className="betListScore1">{num1}</div>
                <div className="betListScoreNone">:</div>
                <div className="betListScore2">{num2}</div>
                <div className="betListTeam2">{team2}</div>
                <div className="betlistResult">{result}</div>
            </div>
        </div>
    )
};

export default BetOptionList;