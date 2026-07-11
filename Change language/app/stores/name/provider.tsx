import { useReducer, useState } from "react";
import { NameContext } from "~/stores/name/context";
import { reducer } from "./reducer";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select"

const items = [
    { label: "English 🏴󠁧󠁢󠁥󠁮󠁧󠁿", value: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", dir: "ltr" },
    { label: "العربی 🇮🇶", value: "🇮🇶", dir: "rtl" },
    { label: "فارسی 🇮🇷", value: "🇮🇷", dir: "rtl" },
    { label: "France 🇫🇷", value: "🇫🇷", dir: "ltr" },
]



export function NameProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, {
        name: "خوش آمدید",
        direction: "rtl"
    })

    return (
        <NameContext.Provider value={{ state, dispatch }}>
            <header  dir= {state.direction}  className="text-center">
                {<Select onValueChange={(value) => dispatch(value)} >
                    <SelectTrigger className="p-5 mx-5 my-2" >
                        <SelectValue placeholder="🌍" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {items.map((item) => (
                                <SelectItem dir={item.dir} key={item.value} value={item.value}  >
                                    {item.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>}
            </header>
            {children}

        </NameContext.Provider>
    )
}
