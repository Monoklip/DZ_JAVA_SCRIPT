import { ChangeEventHandler, MouseEventHandler, SetStateAction, useState } from 'react';
import './create-user.scss';

const CreateUser = (props: { updateUserList: (arg0: { login: string; password: string; email: string; }) => void; }) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleChengeLogin = (event: { target: { value: SetStateAction<string>; }; }) => {
        setLogin(event.target.value);
    };
    const handleChengePassword = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
    };
    const handleChengeEmail = (event: { target: { value: SetStateAction<string>; }; }) => {
        setEmail(event.target.value);
    };

    const createBtn = () => {
        props.updateUserList({
            login: login,
            password: password,
            email: email,
        });
    }

    return(
        <form action="">
            <h1>Login</h1>
            <input type="text" onChange={handleChengeLogin} placeholder={'Name'}/>
            <h1>Password</h1>
            <input type="password" onChange={handleChengePassword} placeholder={'Password'}/>
            <h1>Email</h1>
            <input type="email" onChange={handleChengeEmail} placeholder={'Email'}/>
            <button onClick={createBtn}>Add user</button>
        </form>
    )
};

export default CreateUser;