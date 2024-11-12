import React from 'react';
import Ticket from './Ticket';

const Column = ({ title, tickets, users }) => {
  return (
    <div className="column">
      <div className="column-header">
        <h2>{title}</h2>
        <span className="ticket-count">{tickets.length}</span>
      </div>
      <div className="tickets">
        {tickets.map(ticket => (
          <Ticket 
            key={ticket.id}
            ticket={ticket}
            user={users.find(u => u.id === ticket.userId)}
          />
        ))}
      </div>
    </div>
  );
};
export default Column;