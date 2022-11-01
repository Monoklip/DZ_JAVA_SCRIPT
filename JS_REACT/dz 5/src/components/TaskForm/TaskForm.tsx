import { useState } from 'react';
import './task-form.scss';
import Task from './Task/Task';
import TaskTitle from './TaskTitle/TaskTitle';

const TaskForm = () => {

    const taskFromLocalStorage = JSON.parse(localStorage.getItem('Task') as string) || [];
    const [tasks, setTask] = useState(taskFromLocalStorage);
    
    const uptadeTaskList = (newList: any) =>{
        setTask([...tasks, newList]);
        localStorage.setItem('Task', JSON.stringify([...tasks, newList]));
    };

    return(
        <div className="task-form">
            <TaskTitle uptadeTaskList={uptadeTaskList}/>
            <Task tasks={tasks} />
        </div>
    )
};

export default TaskForm;