import { useState } from "react";
import "./task-title-item.scss";

const TaskTitleItem = (props: { task: { name: any; }; }) => {

     const {
          name: name
     } = props.task;

     const [checked, setChecked] = useState<boolean>(false);
     const [done, setDone] = useState('done');
     const [disable, setDisable] = useState<boolean>(true);
     const [taskDisplay, setTaskDisplay] = useState('flex');

     const handleChangeChecked = () => {

          if(checked == false){
               setChecked(!checked);
               setDone('In progress');
               setDisable(false)
          }
          else{
               setChecked(!checked);
               setDone('done');
               setDisable(true)
          }
     };

     const deleteTaskBtn = () => {
          setTaskDisplay('none');
          localStorage.removeItem('Task')
     }

     return (
          <div className="task-title-item" style={{display:`${taskDisplay}`}}>
               <li></li>
               <div className="titleItemName">{name}</div>
               <input className="titleItemCheck" type="checkbox" checked={checked} onChange={handleChangeChecked}/>
               <div className="titelItemDone">{done}</div>
               <div className="titleItemBtn">
                    <button className="titleItemBtnEdit">Edit</button>
               </div>
               <div className="titleItemBtn">
                    <button className="titleItemBtnDelete" disabled={disable} onClick={deleteTaskBtn}>Delete</button>
               </div>
          </div>
     );
};

export default TaskTitleItem;
