import { Link } from "react-router-dom";
import './home-cenzor.scss';

const HomeCenzor = () => {
    return(
        <div className="home-box">
            <div className='home-list img1'></div>
            <button className="details-btn">
                 <Link to={'/works/cenzor'}>Cenzor</Link>
            </button>
        </div>
    )
};

export default HomeCenzor;