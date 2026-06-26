import { useState } from "react";
import type { Money, Type } from "~/routes/type/type";

export default function InputMoney({
    money,
    setMoney,
}: {
    money: Money[];
    setMoney:( money: Money[]) => void;
}) {
    const [amount, setAmount] = useState("0");
    const [type, setType] = useState<Type>("Deposit");

    const onClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newMoney = {
            amount: Number(amount),
            type: type,
        };

        setMoney([...money, newMoney]);
    };

    return (
        <form
            onSubmit={onClick}
            className="flex gap-3 mb-5"
        >
            <input
                type="number"
                min={1}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                className="flex-1 bg-gray-700 text-white border border-gray-600 rounded p-2"
            />

            <select
                value={type}
                onChange={(e) => setType(e.target.value as Type)}
                className="bg-gray-700 text-white border border-gray-600 rounded p-2"
            >
                <option value="Deposit">Deposit</option>
                <option value="Withdraw">Withdraw</option>
            </select>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
            >
                Add
            </button>
        </form>
    );
}
