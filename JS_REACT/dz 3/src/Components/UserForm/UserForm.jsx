import { useState } from 'react';
import './UserForm.scss';
import UserList from './UserList/UserList';
import UserTitle from './UserTitle/UserTitle';

const UserForm = () => {

    const usersFromStorage = JSON.parse(localStorage.getItem('users')) || [];
    const [users, setUsers] = useState(usersFromStorage);

    const updateUserList = newUser => {
        setUsers([...users, newUser]);
        localStorage.setItem('users', JSON.stringify([...users, newUser]));
    }

    return(
        <div className='user-form'>
            <UserTitle updateUserList={updateUserList}/>
            <UserList users={users}/>
        </div>
    )
}

export default UserForm;