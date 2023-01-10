import React, { useState } from 'react';
import './task-create.scss';

const TaskCreate = (props: { updateTaskList: (arg0: { name: string; }) => void; }) => {

    const [name, setName] = useState('');

    const hendleNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(event.target.value);
    };

    const createBtn = () => {
        props.updateTaskList({
            name: name
        });
    }

    return(
        <div>
            <hr />
                <div className='task-create'>
                    <input type="text" onChange={hendleNameChange} placeholder={'Введіть завдання'} />
                    <button onClick={createBtn}>add</button>
                </div>
            <hr />
        </div>
    )
};

export default TaskCreate;