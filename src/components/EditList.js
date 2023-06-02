import React from "react";
import "./EditList.css";

const EditList = ({
  editUserInput,
  handleEditChange,
  handleEditSubmit,
  cancelEdit,
}) => {
  return (
    <div>
      <form className="edit-form" onSubmit={handleEditSubmit}>
        <input
          name="firstName"
          type="text"
          required="required"
          placeholder="Firstname"
          value={editUserInput.firstName}
          onChange={handleEditChange}
        />
        <input
          name="lastName"
          type="text"
          required="required"
          placeholder="Lastname"
          value={editUserInput.lastName}
          onChange={handleEditChange}
        />
        <input
          name="age"
          type="number"
          required="required"
          placeholder="Age"
          value={editUserInput.age}
          onChange={handleEditChange}
        />
        <input
          name="email"
          type="email"
          required="required"
          placeholder="Email"
          value={editUserInput.email}
          onChange={handleEditChange}
        />
        <input
          name="phone"
          type="number"
          required="required"
          placeholder="Phone No."
          value={editUserInput.phone}
          onChange={handleEditChange}
        />
        <input
          name="password"
          type="text"
          required="required"
          placeholder="Password"
          value={editUserInput.password}
          onChange={handleEditChange}
        />
        <button className="save-btn" type="submit">
          save
        </button>
        <button className="cancel-btn" onClick={cancelEdit}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditList;
