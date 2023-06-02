import React from "react";
import "./UserList.css";

const UserList = ({ user, editUser, deleteUser }) => {
  return (
    <article className="userlist">
      <ul className="userlist-data">
        <li>{user.firstName}</li>
        <li>{user.lastName}</li>
        <li>{user.age}</li>
        <li>{user.email}</li>
        <li>{user.phone}</li>
        <li>{user.password}</li>
        <div className="btn-group">
          <button className="edit-btn" onClick={() => editUser(user)}>
            Edit
          </button>
          <button className="delete-btn" onClick={() => deleteUser(user.id)}>
            Delete
          </button>
        </div>
      </ul>
    </article>
  );
};

export default UserList;
