import React from "react";
import './TicketsList.scss';
import TicketsListItem from "./TicketsListItem/TicketsListItem";

const TicketsList = (props: { tickets: any[]; }) => {
    if (props.tickets.length) {
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
                {props.tickets.map(tickets => {
                    return <TicketsListItem tickets={tickets} />
                })}
            </div>
        )
    } else {
        return <div className="error">Список пустий</div>
    }
}

export default TicketsList;