import { useState } from 'react';
import { Link } from 'react-router-dom';
import './works-menu.scss';

const WorksMenu = () => {

    const [btn1, setBtn1] = useState<any>();
    const [btn2, setBtn2] = useState<any>();
    const [btn3, setBtn3] = useState<any>();

    const border1 = {
        border: '1px solid grey',
        borderBottom: 'none'
    };

    const border2 = {
        border: 'none',
        borderBottom: '1px solid grey'
    };

    const btnClick1 = () => {
        setBtn1(border1);
        setBtn2(border2);
        setBtn3(border2);
    };

    const btnClick2 = () => {
        setBtn1(border2);
        setBtn2(border1);
        setBtn3(border2);
    };

    const btnClick3 = () => {
        setBtn1(border2);
        setBtn2(border2);
        setBtn3(border1);
    };
    
    return(
        <div className='worksMenu'>
           <div className='nextWorks'>
                <div className="lastWorks" > Last works ˃˃˃</div>
           </div>
           <div className='cenzorWorks' style={btn1}>
                <Link to={'/works/cenzor'} onClick={btnClick1}>Cenzor</Link>
           </div>
           <div className='userListWorks' style={btn2}>
                <Link to={'/works/userlist'} onClick={btnClick2}>User List</Link>
           </div>
           <div className='taskListWorks' style={btn3}>
                <Link to={'/works/tasklist'} onClick={btnClick3}>Task List</Link>
           </div>
           <div className='pustota'></div>
           <div className='backHome'>
                <Link to={'/home'}>Back to ˃˃˃ Home</Link>
           </div>
        </div>
    )
};

export default WorksMenu;