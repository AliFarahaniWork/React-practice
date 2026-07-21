import '../App.css'
const AnalogClock = ({ time }: { time: any }) => {
    const second = time.format('ss');
    const minute = time.format('mm')
    const hour = time.format('hh')
    const clockNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    const hourDeg = hour * 30
    const minuteDeg = minute * 6
    const secondDeg = second * 6

   return (
    <div
        className="
        w-64 
        h-64 
        rounded-full 
        border-4 
        border-slate-800
        bg-white
        shadow-xl
        relative
        "
    >

        <div>
            {clockNumber.map((number, index) =>
                <span
                    key={index}
                    className="
                    absolute 
                    inset-3 
                    text-center
                    font-bold
                    text-slate-700
                    "
                    style={{
                        transform: `rotate(${(index + 1) * 30}deg)`
                    }}
                >

                    <span
                        className="inline-block"
                        style={{
                            transform: `rotate(-${(index + 1) * 30}deg)`
                        }}
                    >
                        {number}
                    </span>

                </span>
            )}
        </div>


        {/* C*/}
        <div
            className="
            w-4
            h-4
            rounded-full
            bg-slate-800
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            z-10
            "
        />


        {/* S */}
        <div
            className="
            absolute
            left-1/2
            top-1/2
            w-0.5
            h-28
            bg-red-500
            rounded-full
            -translate-x-1/2
            -translate-y-full
            origin-bottom
            "
            style={{
                transform: `rotate(${secondDeg}deg)`
            }}
        />


        {/* M */}
        <div
            className="
            absolute
            left-1/2
            top-1/2
            w-1
            h-20
            bg-slate-700
            rounded-full
            -translate-x-1/2
            -translate-y-full
            origin-bottom
            "
            style={{
                transform: `rotate(${minuteDeg}deg)`
            }}
        />


        {/* H */}
        <div
            className="
            absolute
            left-1/2
            top-1/2
            w-1.5
            h-16
            bg-slate-900
            rounded-full
            -translate-x-1/2
            -translate-y-full
            origin-bottom
            "
            style={{
                transform: `rotate(${hourDeg}deg)`
            }}
        />

    </div>
)
}


export default AnalogClock
