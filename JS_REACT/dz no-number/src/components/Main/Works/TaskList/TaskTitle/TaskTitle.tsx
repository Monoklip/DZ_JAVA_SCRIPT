import './task-title.scss';
import TaskTitleItem from './TaskTitleItem/TaskTitleItem';

const TaskTitle = (props: { task: any[]; }) => {
    return(
        <div>
            <div className='task-title'>
                <div className="titleNum ">
                        <h4>#</h4>
                </div>
                <div className="titleName">
                        <h4>Task</h4>
                </div>
                <div className="titleCheck">
                        <h4>Check</h4>
                </div>
                <div className="titleDone">
                        <h4>done / in progress</h4>
                </div>
                <div className="titleBtn">
                        <h4>edit</h4>
                </div>
                <div className="titleBtn">
                        <h4>delete</h4>
                </div>
            </div>
            <hr />
            <ol type='1'>
                {props.task.map(task => {
                    return <TaskTitleItem task={task} />
                })}
            </ol>
        </div>
        
    )
};

export default TaskTitle;