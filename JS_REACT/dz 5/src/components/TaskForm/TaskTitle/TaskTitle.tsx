import { SetStateAction, useState } from 'react';
import './task-title.scss';

const TaskTitle = (props: { uptadeTaskList: (arg0: { taskInput: string; }) => void; }) => {

    const [taskInput, setTaskInput] = useState('');
    
    const handleTaskChenge = (event: { target: { value: SetStateAction<string>; }; }) => {
        setTaskInput(event.target.value);
    };

    const createBtn = () => {
        props.uptadeTaskList({
            taskInput: taskInput
        });
    }

    return(
        <div className="task-title">
            <input type="text" className="input" onChange={handleTaskChenge} />
            <button className="btn" onClick={createBtn}>Add task</button>
        </div>
    )
};

export default TaskTitle;