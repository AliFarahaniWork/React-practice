import { useSearchParams } from "react-router";
import "../style.css";


export default function Divide() {
 

    const [inputNumber] = useSearchParams()

    const inputA = Number(inputNumber.get('A'))
    const inputB = Number(inputNumber.get('B'))

    return (
        <div className="container">
            <div className="card">
                Divide Result: {inputA / inputB}


            </div>
        </div>

    )
}
