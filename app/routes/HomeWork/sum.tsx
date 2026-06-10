import { useSearchParams } from "react-router";
import "../style.css";


export default function Sum() {
    

    const [inputNumber] = useSearchParams()

    const inputA = Number(inputNumber.get('A'))
    const inputB = Number(inputNumber.get('B'))

    return (
        <div className="container">
            <div className="card">
                Sum Result: {inputA + inputB}
            </div>
        </div>
    );

}
