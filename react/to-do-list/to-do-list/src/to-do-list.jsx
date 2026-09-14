import React, { useState,useEffect } from "react"



function Todolist() {

    const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [" "];
      
  });
    const [newtask, setNewtask] = useState("");

    const [editid, setEditid] = useState(null)
    const [edittext, setEdittext] = useState("")
    const [newtext, setNewtext] = useState()

      useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

    function handilinputchange(event) {
        setNewtask(event.target.value);

    };
    function addTask() {

        if (newtask.trim() !== "") {
            setTask(t => [...t, newtask]);
            setNewtask("");
        }

    };

    function deleteTask(index) {
        const updatedtasks = task.filter((_, i) => i !== index);
        setTask(updatedtasks);

    };

    function MoveTaskUp(index) {
        if (index > 0) {
            const updatedtasks = [...task];
            [updatedtasks[index], updatedtasks[index - 1]] =
                [updatedtasks[index - 1], updatedtasks[index]];
            setTask(updatedtasks);
        }

    };

    function MoveTaskDown(index) {

        if (index < task.length - 1) {
            const updatedtasks = [...task];
            [updatedtasks[index], updatedtasks[index + 1]] =
                [updatedtasks[index + 1], updatedtasks[index]];
            setTask(updatedtasks);
        }

    };
    function Editbutton(index, task) {
        // alert("hello")
        setEditid(index)
        setEdittext(task)



    }
    function handilsave() {
        const updatedtasks = [...task];
        updatedtasks[editid] = edittext;
        setTask(updatedtasks);
        setEditid(null);
        setEdittext("");
    }

    return (<div className="to-do-list">

        <h1>To-Do-list</h1>
        <div>

            <input type="text"
                placeholder="Enter a task...."
                value={newtask}
                onChange={handilinputchange}
            ></input>
            <button className="add-button"
                onClick={addTask}
            >Add</button>
        </div>

        <ol>
            {task.map((task, index) =>

                (editid === index) ?
                    (
                        <li>
                            <input value={edittext}
                                onChange={(e) => setEdittext(e.target.value)}
                            />

                            <button className="save-button"
                                onClick={() => handilsave()}
                            >save</button>
                        </li>

                    ) :

                    (<li key={index}>



                        <span className="text">{task}</span>
                        <button className="Delete-button"
                            onClick={() => deleteTask(index)}>
                            ❌
                        </button>
                        <button className="move-button"
                            onClick={() => MoveTaskUp(index)}>
                            ⬆️
                        </button>
                        <button className="move-button"
                            onClick={() => MoveTaskDown(index)}>
                            ⬇️
                        </button>

                        <button className="move-button-pen"
                            onClick={() => Editbutton(index, task)}>
                            🖋️
                        </button>


                    </li>
                    )
            )}
        </ol>

    </div>);
}
export default Todolist