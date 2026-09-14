import React, { useState } from 'react'
import "./App.css"

function App() {
  const [task, setTask] = useState([ ])
  const [input, setInput] = useState("")

  const[editid,setEditid]=useState(null)
  const[edittext,setEdittext]=useState("")


  function submitButton(e) {
    // alert('hello')
    e.preventDefault();
    if (input.trim() == "") {
      return
    }
    setTask(prev => [...prev, {
      id: Date.now(),
      title: input,
    }])
    setInput("")

    console.log(task)
    
  }
  function deleteButton(id) {
    let updateState = task.filter((_, i) => i !== id)
    setTask(updateState)
  }
  function Editbutton (task,id){
    // alert('')
    setEditid(task.id)
    setEdittext( prev => task.title)
    console.log('inside edit');
    console.log(edittext)

  }

  return (
    <div>

      <div>
        <div className='h1div'>
          <h1>To-do-List</h1>
        </div>
        <div className='todo-div'>
          <form>

            <input
              placeholder='Enter task..'
              value={input}
              onChange={(e) => setInput(e.target.value)}

            ></input>
            <button
              onClick={submitButton}
            >submit</button>

          </form>
        </div>

        <div className='lidiv'>

          {task.map((task) => (

            (editid==task.id) ? (

              <li>
                <input 
                value={edittext}
                onChange={(e)=>setEdittext(e.target.value)}
                ></input>
              </li>

            ):

            <div style={{ display: 'flex' }} key={task.id}>

              <h1>{task.title}</h1>
              <button onClick={() => deleteButton(id)}>delete</button>
              <button
              onClick={() =>Editbutton(task) }
              >Edit</button>
            </div>
          ))}
        </div>


      </div>

    </div>
  )
}

export default App
