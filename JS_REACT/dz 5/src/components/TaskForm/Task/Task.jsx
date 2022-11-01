import './task.scss';
import TaskItem from './TaskItem/TaskItem';

const Task = (props) => {

    if(props.tasks.length){
        return(
            <div className='form-task'>
                <div className="task">
                    <div className="num">#</div>
                    <div className="name">Task</div>
                    <div className="check">Check</div>
                    <div className="done">Done / in proggress</div>
                    <div className="btn-edit">Edit</div>
                    <div className="btn-delete">Delete</div>
                </div>
                <ol type='1' className='ol'>
                    {props.tasks.map(task => {
                    return < TaskItem task={task}/>
                })}
                </ol>
            </div>
        )
    }
    else{
        return(
            <div className='error'>
                <h2>Список пустий</h2>
            </div>
        )
    }
};

export default Task;