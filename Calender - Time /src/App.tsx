import './App.css'
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import dayjsHijri from 'dayjs-hijri';
import AnalogClock from './components/analogClock';
import DigitalClock from './components/digitalClock';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

dayjs.extend(jalaliday)
dayjs.extend(dayjsHijri);




function App() {
    const getData = async (url: string) => {
        const response = await fetch(url)
        const result = await response.json();
        return result;

    }
    const { data, error, isLoading } = useQuery({
        queryKey: "data" as any,
        queryFn: () => getData("https://timeapi.io/api/v1/time/current/unix_ms"),
        refetchInterval: 1000
    })

    


    const timeNow = useMemo(() => dayjs(data?.unix_timestamp), [data])
    const timeNowPersian = useMemo(
        () => dayjs(data?.unix_timestamp).calendar("jalali").locale("fa")
        , [data])
const timeNowArab = useMemo(
    () => dayjs(data?.unix_timestamp)
        .calendar("hijri")
        .locale("ar"),
    [data]
)





return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">

        {isLoading ? (
            <>LOADING ...</>

        ) : error ? (

            <pre>error: {JSON.stringify(error)}</pre>

        ) : (

            <div className="flex w-full max-w-6xl items-center justify-between rounded-2xl bg-white p-10 shadow-lg">

                <div className="flex-1">

                    <div className="mb-8 flex flex-row items-center justify-center gap-3 border-b pb-6">
                        <span className="text-2xl font-bold text-yellow-600">
                            {timeNowPersian.format("dddd - D MMMM YYYY")}
                        </span>
    <div className= "border-l h-10"></div>
                        <h1 className="text-3xl font-bold text-slate-800">
                            ساعت و تقویم ایران
                        </h1>


                    </div>


                    <div className="grid grid-cols-3 gap-6 text-center">


                        <div>

                            <h2 className="mb-4 text-xl font-bold text-yellow-600">
                                تاریخ خورشیدی
                            </h2>

                            <p className="text-slate-700">
                                {timeNowPersian.format("YYYY/MM/DD")}
                            </p>

                            <p className="mt-2 text-sm text-slate-500">
                                {timeNowPersian.format("dddd - D MMMM YYYY")}
                            </p>

                        </div>



                        <div >

                            <h2 className="mb-4 text-xl font-bold text-yellow-600">
                                تاریخ میلادی
                            </h2>

                            <p className="text-slate-700">
                                {timeNow.format("YYYY-MM-DD")}
                            </p>

                            <p className="mt-2 text-sm text-slate-500">
                                {timeNow.format("dddd - MMMM D, YYYY")}
                            </p>

                        </div>




                        <div>

                            <h2 className="mb-4 text-xl font-bold text-yellow-600">
                                تاریخ قمری
                            </h2>

                            <p className="text-slate-700">
                                {timeNowArab.format("YYYY-MM-DD")}
                            </p>

                            <p className="mt-2 text-sm text-slate-500">
                                {timeNowArab.format("dddd - DD MMM YYYY")}
                            </p>

                        </div>


                    </div>


                </div>




                <div className="ml-10 flex flex-col items-center gap-5">

                    <AnalogClock time={timeNow} />

                    <DigitalClock time={timeNow} />

                </div>


            </div>

        )}

    </div>
)}
export default App
