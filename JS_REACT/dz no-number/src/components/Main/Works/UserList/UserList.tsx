import { useState } from 'react';
import WorksMenu from '../WorksMenu/WorksMenu';
import CreateUser from './CreateUser/CreateUser';
import SettingUser from './SettingUser/SettingUser';
import './user-list.scss';

const UserList = () => {
    
    const userListFromStorage = JSON.parse(localStorage.getItem('Users') as string) || [];
    const [users, setUsers] = useState(userListFromStorage);

    const updateUserList = (newUsers: any) => {
        setUsers([...users, newUsers]);
        localStorage.setItem('Users', JSON.stringify([...users, newUsers]));
    };

    return(
        <div>
            <WorksMenu/>
            <div className='user-list'>
                <CreateUser updateUserList={updateUserList}/>
                <SettingUser users={users}/>
            </div>
        </div>
    )
};

export default UserList;