import { Link } from "react-router-dom";
import './home-user-list.scss';

const HomeUserList = () => {
    return(
        <div className="home-box">
            <div className='home-list img2'></div>
            <button className='details-btn'><Link to={'/works/userlist'}>User List</Link></button>
        </div>
        
    )
};

export default HomeUserList;