import type { Money } from "~/routes/type/type";
import type { Filter } from "~/routes/type/type";

export default function ListOfMoney({
    money,
    setFilter,
}: {
    money: Money[];
    setFilter: (filter : Filter)=> void;
}) {
    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">

            <div className="flex gap-2 mb-4">

                <button
                    onClick={() => setFilter("All")}
                    className="bg-gray-700 text-white px-3 py-2 rounded hover:bg-gray-600"
                >
                    All
                </button>

                <button
                    onClick={() => setFilter("Deposit")}
                    className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700"
                >
                    Deposit
                </button>

                <button
                    onClick={() => setFilter("Withdraw")}
                    className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700"
                >
                    Withdraw
                </button>

            </div>

            <ul className="space-y-2">
                {money.map((mon: Money, index: number) => {
                    if (mon.type === "Deposit") {
                        return (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-gray-700 border border-gray-600 rounded p-3"
                            >
                                <span className="text-green-400">
                                    Deposit
                                </span>

                                <span className="text-green-400 font-semibold">
                                    + {mon.amount}
                                </span>
                            </li>
                        );
                    } else {
                        return (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-gray-700 border border-gray-600 rounded p-3"
                            >
                                <span className="text-red-400">
                                    Withdraw
                                </span>

                                <span className="text-red-400 font-semibold">
                                    - {mon.amount}
                                </span>
                            </li>
                        );
                    }
                })}
            </ul>

        </div>
    );
}
