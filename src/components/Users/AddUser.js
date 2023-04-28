import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErorrModal from "../UI/ErorrModle";

function AddUser(props) {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "invalid input",
        msg: "please enter valid name and age"
      });
      return;
    }
    if (age < 1) {
      setError({
        title: "invalid Age",
        msg: "Age most be > 1 and positeve "
      });
      return;
    }
    props.onAddUser(userName, age);
    setUserName("");
    setAge("");
  };

  const inputUserNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const inputAgeHandler = (event) => {
    setAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErorrModal
          title={error.title}
          msg={error.msg}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">User Name</label>
          <input
            value={userName}
            type="text"
            id="name"
            onChange={inputUserNameHandler}
          />
          <label htmlFor="age">Age (year)</label>
          <input
            type="number"
            value={age}
            id="age"
            onChange={inputAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
