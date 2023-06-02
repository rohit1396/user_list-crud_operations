import React, { useState, useEffect } from "react";
import "./App.css";
import UserList from "./components/UserList";
import EditList from "./components/EditList";

// getting data from localStorage
const getLocalStorage = () => {
  let userListData = localStorage.getItem("items");
  return userListData ? JSON.parse(userListData) : [];
};

function App() {
  const [toggleForm, setToggleForm] = useState(false);
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    password: "",
  });
  const [editUserInput, setEditUserInput] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    password: "",
  });
  const [userListData, setUserListData] = useState(getLocalStorage);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleEditChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditUserInput({ ...editUserInput, [name]: value });
  };

  // add user to list
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...userInput, id: new Date().getTime().toString() };
    setUserListData([...userListData, newData]);
    setUserInput({
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      phone: "",
      password: "",
    });
    setToggleForm(false);
  };

  // edit user from list
  const handleEditSubmit = (e) => {
    e.preventDefault();

    const editedUser = {
      id: editId,
      firstName: editUserInput.firstName,
      lastName: editUserInput.lastName,
      age: editUserInput.age,
      email: editUserInput.email,
      phone: editUserInput.phone,
      password: editUserInput.password,
    };

    const newUser = [...userListData];

    const index = userListData.findIndex((user) => user.id === editId);

    newUser[index] = editedUser;
    setUserListData(newUser);
    setEditId(null);
  };

  // edit user input from List
  const editUser = (user) => {
    setEditId(user.id);

    const editValues = {
      id: editId,
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      email: user.email,
      phone: user.phone,
      password: user.password,
    };
    setEditUserInput(editValues);
  };

  // delete user from list
  const deleteUser = (id) => {
    const deleteItem = userListData.filter((item) => item.id !== id);
    setUserListData(deleteItem);
  };

  // cancel edit user
  const cancelEdit = () => {
    setEditId(null);
  };

  // adding data to local storage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(userListData));
  }, [userListData]);

  return (
    <div className="App">
      <h3 className="form-title">User List Form</h3>
      <button
        className="open-button"
        onClick={() => setToggleForm(!toggleForm)}
      >
        Add User
      </button>
      {toggleForm && (
        <form className="add-form" onSubmit={handleSubmit}>
          <input
            name="firstName"
            type="text"
            required="required"
            placeholder="Firstname"
            value={userInput.firstName}
            onChange={handleChange}
          />
          <input
            name="lastName"
            type="text"
            required="required"
            placeholder="Lastname"
            value={userInput.lastName}
            onChange={handleChange}
          />
          <input
            name="age"
            type="number"
            required="required"
            placeholder="Age"
            value={userInput.age}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            required="required"
            placeholder="Email"
            value={userInput.email}
            onChange={handleChange}
          />
          <input
            name="phone"
            type="number"
            required="required"
            placeholder="Phone No."
            value={userInput.phone}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            required="required"
            placeholder="Password"
            value={userInput.password}
            onChange={handleChange}
          />
          <button className="add-submit" type="submit">
            Submit
          </button>
        </form>
      )}
      {userListData.map((user) => (
        <div key={user.id}>
          {editId === user.id ? (
            <EditList
              key={user.id}
              editUserInput={editUserInput}
              handleEditChange={handleEditChange}
              handleEditSubmit={handleEditSubmit}
              cancelEdit={cancelEdit}
            />
          ) : (
            <UserList
              key={user.id}
              user={user}
              editUser={editUser}
              deleteUser={deleteUser}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
