import { useState } from "react"
import "./assets/index.css";




const App = () => {
    const [column, setColumn] = useState("")
    const [tasks, setTask] = useState("")
    const [data, setData] = useState([])

    const addColumn = () => {
        const newColumn = {
            title: column,
            tasks: []
        }
        setData([...data, newColumn])
    }

    const addTask = () => {
        const newTask = [...data]
        newTask[0].tasks.push(tasks)
        setData(newTask)
    }

    const clickToRight = (c, t) => {
        const newData = [...data]
        const task = newData[c].tasks[t]
        newData[c].tasks = newData[c].tasks.filter((_, index) => index !== t)
        newData[c + 1].tasks.push(task)
        setData(newData)
    }

    const clickToLeft = (c, t) => {

        const newData = [...data]
        const task = newData[c].tasks[t]
        newData[c].tasks = newData[c].tasks.filter((_, index) => index !== t)
        newData[c - 1].tasks.push(task)
        setData(newData)
    }
    const deletTask = (c, t) => {
        const newData = [...data]
        newData[c].tasks = newData[c].tasks.filter((_, index) => index !== t)
        setData(newData)
        alert("Task deleted")

    }

    const deleteColumn = (c) => {
        let newData = [...data]
        newData = newData.filter((_, index) => index !== c)
        setData(newData)
        alert("Column deleted")
    }



    return (
        <>
            <div>
                <h4 className="name">HomeWork S11 - Ali Farahani</h4>
            </div>

            <div className="main-div">
                <div></div>
                <div className="main-input">
                    <input className="input" placeholder="Wtite The Title" value={column} onChange={(e) => setColumn(e.target.value)} />
                    <button className="button-column" onClick={addColumn}>Column +</button>
                    <input className="input" placeholder="Wtite Your Task" value={tasks} onChange={(e) => setTask(e.target.value)} />
                    <button className="task-button" onClick={addTask}>Task +</button>

                </div>

                <div className="main-show">
                    {data.map((col, cI) =>
                        <div className="column-in-task" key={cI}>
                            <h2 >{col.title}</h2>
                            {col.tasks.map((tas, tI) =>
                                <div className="task-in-box" key={tI}>
                                    <p>{tas}</p>
                                    {cI !== 0 && <button className="button-in-task" onClick={() => clickToLeft(cI, tI)}>˂</button>}
                                    <button className="button-in-task" onClick={() => deletTask(cI, tI)}>☓</button>
                                    {cI !== data.length - 1 && <button className="button-in-task" onClick={() => clickToRight(cI, tI)}>˃</button>}

                                </div>
                            )}
                            <button className="button-delete-column" onClick={() => deleteColumn(cI)}>☓</button>

                        </div>

                    )}
                </div>
            </div>
        </>

    )



}


export default App
