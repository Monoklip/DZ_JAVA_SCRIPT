import { useState } from "react";
import './task-item.scss';

const TaskItem = (props) => {

    const [done, setDone] = useState('Done');
    const [check, setCheck] = useState(false);
    const [btnDisable, setBtnDisable] = useState(true);
    const [display, setDisplay] = useState(true);
    const [color, setColor] = useState('red');
    const [editBox, setEditBox] = useState(false);

    const [inpEditName, setInpEditName] = useState();

    const handleInpNameChange = (event) => {
        setInpEditName(event.target.value);
    };

    const newNameBtn = () => {
        if(inpEditName.trim() !== ''){

            setEditBox(false);

            const edit = JSON.parse(localStorage.getItem('Task'));
            console.log(edit);

            const editTask = (item) => {
                if(item.task !== `${props.task.task}`){
                    return true;
                }
            };

            const newEdit = edit.filter(editTask);
            localStorage.setItem('Task', JSON.stringify([...newEdit, {task: `${inpEditName}`}]));

            props.task.task = `${inpEditName}`;
        }
        else{
            alert('Неможна залишати поле пустим!');
        }
    };

    const handleCheckChenge = () => {
        setCheck(!check);

        if(check === false){
            setDone('In progress');
            setBtnDisable(false);
            setColor('green')
        }
        else{
            setDone('Done');
            setBtnDisable(true);
            setColor('red');
        }
    };

    const edit = () => {
        setEditBox(true);
        setInpEditName('');
    };

    const btnDelete = () => {
        const deleteTask = JSON.parse(localStorage.getItem('Task'));

        const filterTask = (item) => {
            if(item.task !== `${props.task.task}`){
                return true;
            }
        };

        const newDeleteTask = deleteTask.filter(filterTask);

        localStorage.setItem('Task', JSON.stringify(newDeleteTask));
        setDisplay(false);
        setEditBox(false);
    };

    const close = () => {
        setEditBox(false);
    }

    return(
        <div>
            {display && (
                <div className="task-item">
                    <li></li>
                    <div className="task-name">{props.task.task}</div>
                    <input className="task-input" type="checkbox" checked={check} onChange={handleCheckChenge}/>
                    <div className="task-done" style={{color:`${color}`}}>{done}</div>
                    <button className="task-btn-edit" onClick={edit}>Edit</button>
                    <button className="task-btn-delete" disabled={btnDisable} onClick={btnDelete}>Delete</button>
                </div>
            )}
            {editBox && (
                <div className="edit-box" >
                    <input type="text" className="edit-input" onChange={handleInpNameChange}/>
                    <button className="edit-btn-rename" onClick={newNameBtn}>Rename task</button>
                    <button className="edit-btn-close" onClick={close}>Close</button>
                </div>
            )}
        </div>
    )
};

export default TaskItem;