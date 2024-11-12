import React from 'react';

const Ticket = ({ ticket, user }) => {
  return (
    <div className="ticket">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        <div className="user-avatar">
          {user?.name[0]}
          <span className={`status-dot ${user?.available ? 'available' : 'away'}`}></span>
        </div>
      </div>
      <h3 className="ticket-title">{ticket.title}</h3>
      <div className="ticket-tags">
        <span className="priority-tag">
          {ticket.priority === 4 && '⚡ Urgent'}
          {ticket.priority === 3 && '🔴 High'}
          {ticket.priority === 2 && '🟡 Medium'}
          {ticket.priority === 1 && '🔵 Low'}
          {ticket.priority === 0 && '⚪ No priority'}
        </span>
        {ticket.tag && <span className="feature-tag">...</span>}
      </div>
    </div>
  );
};
export default Ticket;