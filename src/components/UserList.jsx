import React, { useState, useEffect } from "react";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="user-list-container">
      <h2 className="user-list-title">Список пользователей</h2>
      {users.length ? (
        <ul>
          {users.map((user) => (
            <li className="user-list-item" key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="loading-message">Загрузка пользователей...</p>
      )}
    </div>
  );
};
