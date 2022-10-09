import { useState } from 'react';
import './TicketsForm.scss';
import TicketsList from './TicketsList/TicketsList';
import TicketsTitle from './TicketsTitle/TicketsTitle';


const TicketsForm = () => {

    const ticketsFromStorage = JSON.parse(localStorage.getItem('tickets') as string) || [];
    const [tickets, setTickets] = useState(ticketsFromStorage);

    const updateTicketsList = (newTickets: any) => {
        setTickets([...tickets, newTickets]);
        localStorage.setItem('tickets', JSON.stringify([...tickets, newTickets]));
    }

    return(
        <div className='user-form'>
            <TicketsTitle updateTicketsList={updateTicketsList}/>
            <TicketsList tickets={tickets}/>
        </div>
    )
}

export default TicketsForm;