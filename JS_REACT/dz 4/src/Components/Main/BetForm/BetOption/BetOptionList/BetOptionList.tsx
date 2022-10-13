import './BetOptionList.scss';

const BetOptionList = (props: { bet: { team1: any; team2: any; num1: any; num2: any; result: any; }; }) => {
    const {
        team1,
        team2,
        num1,
        num2,
        result
    } = props.bet;

    const SettingTeam1 = () => {
        if(num1 > num2) {
            return 'winner';
        }
        else if(num1 < num2){
            return 'loss';
        }
        else if(num1 == num2){
            return 'draw';
        }
    };
    const SettingTeam2 = () => {
        if(num1 < num2) {
            return 'winner';
        }
        else if(num1 > num2){
            return 'loss';
        }
        else if(num1 == num2){
            return 'draw';
        }
    };

    return(
        <div>
             <div className="bet-option-list">
                <div className={'betListTeam1' + ' ' + SettingTeam1()}>{team1}</div>
                <div className="betListScore1">{num1}</div>
                <div className="betListScoreNone">:</div>
                <div className="betListScore2">{num2}</div>
                <div className={'betListTeam2' + ' ' + SettingTeam2()}>{team2}</div>
                <div className="betlistResult">{result}</div>
            </div>
        </div>
    )
};

export default BetOptionList;