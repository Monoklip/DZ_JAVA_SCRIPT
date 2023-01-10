import React from "react";
import './TicketsListItem.scss';

const TicketsListItem = (props: { tickets: { title: any; date: any; type: any; price: any; sold: any; id: any; }; }) => {
    const {
        title,
        date,
        type,
        price,
        sold,
        id
    } = props.tickets;

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

export default TicketsListItem;
