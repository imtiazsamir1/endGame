import React, { useEffect, useState } from "react";
import Task from "../Task/Task";
import { Link } from "react-router-dom";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);

  // load data
  useEffect(() => {
    fetch("https://metric-eds-46319.herokuapp.com/task")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    // const email = event.target.email.value;
    const user = { name };

    // post data to server

    fetch("https://metric-eds-46319.herokuapp.com/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUsers = [...tasks, data];
        setTasks(newUsers);
        console.log(data);
      });
  };
  return (
    <div className="App">
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" required />

        <input type="submit" value="Add tasks" />
      </form>
      <h1>{tasks.id}</h1>
      <ul>
        <li>
          {/* {tasks.map((task) => task.name)} */}
          {tasks.map((task) => (
            <li key={task.id}>
              <Link to={"/compleatedTasks"}>
                <input type="checkbox" name="terms" id="terms" />
              </Link>
              {task.id} {task.name}
            </li>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default ToDo;
