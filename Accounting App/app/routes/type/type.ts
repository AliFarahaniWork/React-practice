export type Type = "Deposit" | "Withdraw"

export type Money = {
    amount: number,
    type : Type
}
export type Filter = "All" | "Deposit" | "Withdraw"
