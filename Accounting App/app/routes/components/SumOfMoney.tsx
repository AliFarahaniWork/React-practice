import type { Money } from "~/routes/type/type";

export default function SumOfMoney({ money }: { money: Money[] }) {
    const sumOfDeposit = money
        .filter((mon: Money) => mon.type === "Deposit")
        .reduce((sum: number, cur: Money) => sum + cur.amount, 0);

    const sumOfWithdraw = money
        .filter((mon: Money) => mon.type === "Withdraw")
        .reduce((sum: number, cur: Money) => sum + cur.amount, 0);

    const sum = sumOfDeposit - sumOfWithdraw;

    return (
        <div className="flex gap-3 mb-5">

            <div className="flex-1 bg-gray-700 border border-gray-600 rounded p-3">
                <h3 className="text-white font-semibold mb-2">
                    Deposit
                </h3>

                <p className="text-green-400 text-xl">
                    + {sumOfDeposit}
                </p>
            </div>

            <div className="flex-1 bg-gray-700 border border-gray-600 rounded p-3">
                <h3 className="text-white font-semibold mb-2">
                    Withdraw
                </h3>

                <p className="text-red-400 text-xl">
                    - {sumOfWithdraw}
                </p>
            </div>

            <div className="flex-1 bg-gray-700 border border-gray-600 rounded p-3">
                <h3 className="text-white font-semibold mb-2">
                    Balance
                </h3>

                <p className="text-blue-400 text-xl">
                    {sum}
                </p>
            </div>

        </div>
    );
}
