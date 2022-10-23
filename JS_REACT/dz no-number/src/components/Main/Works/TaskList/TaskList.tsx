import React, { SetStateAction, useState } from 'react';
import WorksMenu from '../WorksMenu/WorksMenu';
import './task-list.scss';
import TaskCreate from './TaskCreate/TaskCreate';
import TaskTitle from './TaskTitle/TaskTitle';

const TaskList = () => {

    const taskListFromStorage = JSON.parse(localStorage.getItem('Task') as string) || [];
    const [task, setTask] = useState(taskListFromStorage);

    const updateTaskList = (newTask: any) => {
        setTask([...task, newTask]);
        localStorage.setItem('Task', JSON.stringify([...task, newTask]));
    };

    return(
        <div>
            <WorksMenu/>
            <div className='task-list'>
                <TaskCreate updateTaskList={updateTaskList}/>
                <TaskTitle task={task}/>
            </div>
        </div>
    )
};

export default TaskList;