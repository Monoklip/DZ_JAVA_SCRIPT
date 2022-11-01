import { useState } from 'react';
import './task-title.scss';

const TaskTitle = (props) => {

    const [task, setTaskInput] = useState('');
    const [value, setValue] = useState('');
    
    const handleTaskChenge = (event) => {
        setValue();
        setTaskInput(event.target.value);
    };

    const createBtn = () => {
        if(task.trim() !== ''){
            props.uptadeTaskList({
                task: task.trim()
            });
        
            setValue('');
            setTaskInput('');
        }
        else{
            alert('Заповніть поле');
        }
    };

    return(
        <div className="task-title">
            <input type="text" className="input" onChange={handleTaskChenge} value={value}/>
            <button className="btn" onClick={createBtn}>Add task</button>
        </div>
    )
};

export default TaskTitle;