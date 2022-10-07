import React from "react";
import './UserListItem.scss';

const UserListItem = (props) => {
    const {
        title,
        date,
        type,
        price,
        sold,
        id
    } = props.user;

    return (
        <div className="user-list-item">
            <div className="title">{title}</div>
            <div className="date">{date}</div>
            <div className="type">{type}</div>
            <div className="price">{price}</div>
            <div className="sold">{sold}</div>
            <div className="id">{id}</div>
        </div>
    )
}

export default UserListItem;
