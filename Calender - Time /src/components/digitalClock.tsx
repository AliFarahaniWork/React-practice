const DigitalClock = ({time} : { time: any}) => {
    const second = time.format('ss A');
    const minute = time.format('mm')
    const hour = time.format('hh')
    console.log(typeof hour)
    return (
    <div
        className="
        mt-4
        rounded-xl
        bg-slate-800
        px-6
        py-3
        text-3xl
        font-bold
        text-white
        shadow-lg
        tracking-widest
        "
    >
        <span>{hour}</span>
        <span className="mx-2">:</span>
        <span>{minute}</span>
        <span className="mx-2">:</span>
        <span>{second}</span>
    </div>
)
}


export default DigitalClock
