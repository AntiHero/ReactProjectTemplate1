import React from "react";
import moment from "moment";

const Notifications = ({ notifications }) => {
  return (
    <div className="section">
      <div className="card z-depth-0 yellow lighten-2">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map(notification => (
                <li key={notification.id}>
                  <span className="pink-text">{ notification.user } </span>
                  <span>{ notification.content } </span>
                  <span className="grey-text note-date">
                    { moment(notification.time.toDate()).fromNow() }
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
