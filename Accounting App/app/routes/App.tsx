import { useState } from "react";
import InputMoney from "./components/InputMoney";
import ListOfMoney from "./components/ListOfMoney";
import SumOfMoney from "./components/SumOfMoney";
import type { Money } from "./type/type";

export default function App() {
    const [money, setMoney] = useState<Money[]>([]);
    const [filter, setFilter] = useState("All");

    let filterShow;

    if (filter === "Deposit") {
        filterShow = money.filter((mon) => mon.type === "Deposit");
    } else if (filter === "Withdraw") {
        filterShow = money.filter((mon) => mon.type === "Withdraw");
    } else {
        filterShow = money;
    }

    return (
        <div className="min-h-screen bg-gray-900 p-8">
            <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-6 shadow">

                <h1 className="text-2xl font-bold text-white text-center mb-6">
                    Accounting App
                </h1>

                <InputMoney
                    money={money}
                    setMoney={setMoney}
                />

                <div className="my-6">
                    <SumOfMoney money={money} />
                </div>

                <ListOfMoney
                    money={filterShow}
                    setFilter={setFilter}
                />

            </div>
        </div>
    );
}
