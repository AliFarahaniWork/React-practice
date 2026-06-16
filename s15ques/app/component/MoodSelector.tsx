import { useState } from "react"

const App = () => {

    const [data , setData] = useState([])
    const mood = ["happy", "natural" , "sad" , "sleepy"]
    
    const MoodSelector = ({onMoodSelect} : {
        onMoodSelect: string
    }) => {
        const [moodData , setMoodData] = useState("")
        const showMoodData = [[...moodData , []]]
        
        return (
            <div>
                {mood.map(but => 
                (<button  key={but} onClick={()=>setMoodData(but) }> {but} </button>))}
                {showMoodData}
            </div>
        )
    }
    const MoodHistory = () => {


        return (
            <div></div>
        )

    }
   

    return (
        <div> 
            < MoodSelector onMoodSelect={setMoodData}/>
        </div>
    )
}


export default App
