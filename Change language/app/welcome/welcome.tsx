import { useContext, useState } from "react";
import { NameContext } from "~/stores/name/context";



export function Welcome() {

    const { state: { name, direction },
    } = useContext(NameContext)
    return (
        <div className=" text-xl text-gray-4000">
            <div
                key={name}
                dir={direction}
                className="text-[12vw] font-black text-black animate-in fade-in zoom-in-95 duration-700">
                {name}
            </div>
        </div>
    );
}
