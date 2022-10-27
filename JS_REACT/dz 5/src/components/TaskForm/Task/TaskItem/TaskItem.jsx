import { useState } from "react";
import './task-item.scss';

const TaskItem = (props) => {

    const [done, setDone] = useState('Done');
    const [check, setCheck] = useState(false);
    const [btnDis, setBtnDis] = useState(true);
    const [display, setDisplay] = useState('flex');

    const handleCheckChenge = () => {
        setCheck(!check);

        if(check === false){
            setDone('In progress');
            setBtnDis(false);
        }
        else{
            setDone('Done');
            setBtnDis(true);
        }
    };

    const btnDelete = () => {
        localStorage.removeItem('Task');
        setDisplay('none')
    };

    return(
        <li className="task-item" style={{display:`${display}`}}>
            <li></li>
            <div className="task-name">{props.task.taskInput}</div>
            <input className="task-input" type="checkbox" checked={check} onChange={handleCheckChenge}/>
            <div className="task-done">{done}</div>
            <button className="task-btn-edit" >Edit</button>
            <button className="task-btn-delete" disabled={btnDis} onClick={btnDelete}>Delete</button>
        </li>
    )
};

export default TaskItem;