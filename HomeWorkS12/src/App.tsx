import { useState } from "react"
import "./assets/index.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



const App = () => {
    const [data, setData] = useState([])

    const schemaColumn = yup.object({
        columnInput: yup.string().required('عنوان ستون را وارد کنید').trim()
    })
    const schemaTask = yup.object({
        taskTitleInput: yup.string().required(' عنوان تسک را وارد کنید').trim(),
        taskTextInput: yup.string().required('متن تسک را وارد کنید').trim()
    })

    const addColumn = (formData) => {

        const newColumn = {
            titleColumn: formData.columnInput,
            tasks: []
        }
        setData([...data, newColumn])
    }



    const addTask = (formData) => {
        const newData = [...data]

        if (newData.length === 0) {
            alert("ابتدا یک ستون ایجاد کنید")
            return
        }

        const newTask = {
            title: formData.taskTitleInput,
            text: formData.taskTextInput
        }
        newData[0].tasks.push(newTask)
        setData(newData)
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
        alert("تسک حذف شد")

    }

    const deleteColumn = (c) => {
        let newData = [...data]
        newData = newData.filter((_, index) => index !== c)
        setData(newData)
        alert("ستون حذف شد")
    }



    const { register: registerColumn,
        handleSubmit: handleSubmitColumn,
        formState: { errors: errorsColumn } } =
        useForm({ resolver: yupResolver(schemaColumn) })

    const { register: registerTask,
        handleSubmit: handleSubmitTask,
        formState: { errors: errorsTasks } } =
        useForm({ resolver: yupResolver(schemaTask) })

    return (
        <>
            <div>
                <h4 className="name">HomeWork S12 - Ali Farahani</h4>
            </div>

            <div className="main-div">

                <div className="main-input">
                    <form onSubmit={handleSubmitColumn(addColumn)}>
                        <input className="input" {...registerColumn("columnInput")} placeholder="Wtite The Title" />
                        <button className="button-column" type="submit">Column +</button>
                        <p>{errorsColumn.columnInput?.message}</p>
                    </form>

                    <form onSubmit={handleSubmitTask(addTask)}>
                        <input className="input" {...registerTask("taskTitleInput")} placeholder="title" />
                        <input className="input" {...registerTask("taskTextInput")} placeholder="text" />
                        <button className="task-button" type="submit" >Task +</button>
                        <p>{errorsTasks.taskTitleInput?.message}</p>
                        <p>{errorsTasks.taskTextInput?.message}</p>


                    </form>

                </div>
                <div className="main-show">

                    {data.map((col, cI) =>
                        <div className="column-in-task" key={cI}>
                            <div >
                                <h1 >{col.titleColumn}</h1>

                                <div >
                                    {col.tasks.map((task, tI) =>

                                        <div className="task-in-box" key={tI}>
                                            <h2>{task.title}</h2>
                                            <p>{task.text}</p>
                                            {cI !== 0 && <button className="button-in-task" onClick={() => clickToLeft(cI, tI)}>˂</button>}
                                            <button className="button-in-task" onClick={() => deletTask(cI, tI)}>☓</button>
                                            {cI !== data.length - 1 && <button className="button-in-task" onClick={() => clickToRight(cI, tI)}>˃</button>}
                                        </div>


                                    )}

                                    <button className="button-delete-column" onClick={() => deleteColumn(cI)}>☓</button>
                                </div>

                            </div>


                        </div>

                    )}


                </div>
            </div>

        </>

    )



}


export default App
