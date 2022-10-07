import React from "react";
import './UserList.scss';
import UserListItem from "./UserListItem/UserListItem";

const UserList = (props) => {
    if (props.users.length) {
        return (

            <div className="user-list">
                <div className="nameDiv">
                    <div className="nameTitle">Title</div>
                    <div className="nameDate">Date</div>
                    <div className="nameType">Type</div>
                    <div className="namePrice">Price</div>
                    <div className="nameStatus">Статус</div>
                    <div className="nameId">Id</div>
                </div>
                {props.users.map(user => {
                    return <UserListItem user={user} />
                })}
            </div>
        )
    } else {
        return <div className="error">Список пустий</div>
    }
}

export default UserList;