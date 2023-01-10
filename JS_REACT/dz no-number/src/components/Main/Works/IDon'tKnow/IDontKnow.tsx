import { Link } from "react-router-dom";
import './i-dont-know.scss';

const IDontKnow = () => {
    return(
        <div className="dontknow">
            <h4>Я незнаю як зробити щоб зі старту заходило не на localhost:3000 , а на localhost:3000/home.</h4>
            <Link to={'./home'}>Тому клік сюди</Link>
        </div>
    )
};

export default IDontKnow;