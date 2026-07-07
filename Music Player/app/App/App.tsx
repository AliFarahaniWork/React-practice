import { useEffect } from "react"
import { useCountStore } from "~/stores/counter"

export default function App() {
    const currentTrack = useCountStore(s => s.tracks[s.curentTrackIndex])
    const nextTrack = useCountStore(s => s.nextTrack)
    const prevTrack = useCountStore(s => s.prevTrack)
    const timeUp = useCountStore(s => s.timeUp)
    const timeDown = useCountStore(s => s.timeDown)
    const volumeUp = useCountStore(s => s.volumeUp)
    const volumeDown = useCountStore(s => s.volumeDown)
    const volume = useCountStore(s => s.volume)
    const icon = useCountStore(s => s.playIcons)
    const playIcon = useCountStore(s => s.playIcon)

    useEffect(() => {
        const interval = setInterval(() => {
            if (icon === "▶️") {
                timeUp(1)
            }

        }, 1000);
        return () => clearInterval(interval)
    }, [icon])


    return (
  <div className="min-h-screen flex items-center justify-center bg-zinc-900 p-5">
        <p className="fixed top-0 left-0 text-white">Ali Farahani - S18</p>

    <div className="w-full max-w-xl bg-zinc-800 rounded-2xl shadow-2xl border border-zinc-700 p-8">

      
      <h1 className="text-3xl font-bold text-white mb-6">
         ♫ {currentTrack.trackName}
      </h1>

      
      <div className="flex justify-between text-zinc-300 mb-2">
        <span>Time</span>
        <span>
          {currentTrack.startTime} / {currentTrack.endTime}
        </span>
      </div>

     
      <div className="w-full h-5 bg-zinc-700 rounded-full overflow-hidden mb-5">
        <div
          className="h-full bg-blue-500 flex items-center justify-center text-xs font-semibold text-white transition-all duration-500"
          style={{
            width: `${
              (currentTrack.startTime / currentTrack.endTime) * 100
            }%`,
          }}
        >
          {currentTrack.startTime}
        </div>
      </div>

      
      <div className="flex justify-between text-zinc-300 mb-2">
        <span>Volume</span>
        <span>{volume}%</span>
      </div>

      
      <div className="w-full h-5 bg-zinc-700 rounded-full overflow-hidden mb-5">
        <div
          className="h-full bg-emerald-500 flex items-center justify-center text-xs font-semibold text-white transition-all duration-500"
          style={{
            width: `${volume}%`,
          }}
        >
          {volume}%
        </div>
      </div>

     

     
      <div className="flex gap-3">

        <div className="flex flex-col gap-3 flex-1">

          <div className="grid grid-cols-3 gap-3">

            <button
              className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-2 transition"
              onClick={() => prevTrack()}
            >
              ⏮️
            </button>

            <button
              className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-2 transition"
              onClick={() => playIcon()}
            >
              {icon === "▶️" ? "⏹️" : "▶️"}
            </button>

            <button
              className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-2 transition"
              onClick={() => nextTrack()}
            >
              ⏭️
            </button>

          </div>

          <div className="grid grid-cols-2 gap-3">

            <button
              className="bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg py-2 transition"
              onClick={() => timeDown(5)}
            >
              ⏪️
            </button>

            <button
              className="bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg py-2 transition"
              onClick={() => timeUp(5)}
            >
              ⏩️
            </button>

          </div>

        </div>

        <div className="flex flex-col gap-3 w-36">
          <button
            className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg py-2 transition"
            onClick={() => volumeUp(5)}
          >
            🔊
          </button>

          <button
            className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg py-2 transition"
            onClick={() => volumeDown(5)}
          >
            🔈️
          </button>


        </div>

      </div>

    </div>

  </div>
);

}
