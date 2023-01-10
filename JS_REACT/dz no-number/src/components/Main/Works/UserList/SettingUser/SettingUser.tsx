import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import './setting-user.scss';
import SettingAddUser from './SettingAddUser/SettingAddUser';

const SettingUser = (props: { users: any[]; }) => {

    // if(props.users.length){
        return(
            <div className="seting">
                <hr/>
                <div className="menu">
                    <div className="menu-set set1">#</div>
                    <div className="menu-set set2">Login</div>
                    <div className="menu-set set3">Password</div>
                    <div className="menu-set set4">Email</div>
                    <div className="menu-set set5">Edit</div>
                    <div className="menu-set set6">Delete</div>
                </div>
                <hr/>
                <ol type='1'>
                    {props.users.map(users => {
                        return <SettingAddUser users={users} />
                    })}
                </ol>
            </div>
        )
    // }
    // else{
    //     <div>
    //         <h1>Список пустий</h1>
    //     </div>
    // }
};

export default SettingUser;