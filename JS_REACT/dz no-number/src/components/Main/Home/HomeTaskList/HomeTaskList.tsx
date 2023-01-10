import { Link } from "react-router-dom";
import './home-task-list.scss';

const HomeTaskList = () => {
    return(
        <div className="home-box">
            <div className='home-list img3'></div>
            <button className='details-btn'><Link to={'/works/tasklist'}>Task List</Link></button>
        </div>
    )
};

export default HomeTaskList;