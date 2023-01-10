import { MouseEventHandler, useState } from 'react';
import './setting-add-user.scss';

const SettingAddUser = (props: { users: { login: any; password: any; email: any; }; }) => {

    const {
        login: login,
        password: password,
        email: email
    } = props.users;

    const [deleteLi, setDeleteLi] = useState('flex');

    const renameBtn = () => {

    };

    const deleteBtn = () => {
        setDeleteLi('none');
    }
        
    return(
        <div className="setting-add-user" style={{display:`${deleteLi}`}}>
            <li></li>
            <div className="name">{login}</div>
            <div className="password">{password}</div>
            <div className="email">{email}</div>
            <button className='edit' onClick={renameBtn}>Edit</button>
            <button className='delete' onClick={deleteBtn}>Delete</button>
        </div>
    )
};

export default SettingAddUser;