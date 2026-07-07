import { create } from "zustand";
import { persist } from "zustand/middleware";

type Track = {
  id: number;
  trackName: string;
  startTime: number;
  endTime: number;
};

type Create = {
  tracks: Track[];
  curentTrackIndex: number;
  nextTrack: () => void;
  prevTrack: () => void;
  timeUp: (sec: number) => void;
  timeDown: (sec: number) => void;
  volumeUp: (vol: number) => void;
  volumeDown: (vol: number) => void;
    volume: number;
    playIcons: "⏹️" | "▶️"
  playIcon: () => void
};

const TRACKS: Track[] = [
  {
    id: 1,
    trackName: "Blinding Lights",
    endTime: 200,
    startTime: 0,
  },
  {
    id: 2,
    trackName: "Shape of You",
    endTime: 233,
    startTime: 0,
  },
  {
    id: 3,
    trackName: "Believer",
    endTime: 204,
    startTime: 0,
  },
  {
    id: 4,
    trackName: "Someone Like You",
    endTime: 285,
    startTime: 0,
  },
  {
    id: 5,
    trackName: "Perfect",
    endTime: 263,
    startTime: 0,
  },
  {
    id: 6,
    trackName: "Levitating",
    endTime: 203,
    startTime: 0,
  },
  {
    id: 7,
    trackName: "Stay",
    endTime: 142,
    startTime: 0,
  },
  {
    id: 8,
    trackName: "Bad Habits",
    endTime: 231,
    startTime: 0,
  },
  {
    id: 9,
    trackName: "As It Was",
    endTime: 167,
    startTime: 0,
  },
  {
    id: 10,
    trackName: "Counting Stars",
    endTime: 257,
    startTime: 0,
  },
  {
    id: 11,
    trackName: "Thunder",
    endTime: 187,
    startTime: 0,
  },
  {
    id: 12,
    trackName: "Heat Waves",
    endTime: 239,
    startTime: 0,
  },
  {
    id: 13,
    trackName: "Memories",
    endTime: 189,
    startTime: 0,
  },
  {
    id: 14,
    trackName: "Dance Monkey",
    endTime: 209,
    startTime: 0,
  },
];

export const useCountStore = create<Create>()(
    persist(
        (set) => ({
      tracks: TRACKS,
      curentTrackIndex: 0,
        volume: 0,
        playIcons: "▶️",
    
        playIcon: () => set(state => ({
            playIcons: state.playIcons === "▶️" ? "⏹️" : "▶️"
        })), 
      nextTrack: () =>
        set((state) => ({
          curentTrackIndex:
            state.curentTrackIndex === state.tracks.length - 1
              ? 0
              : state.curentTrackIndex + 1,
        })),
      prevTrack: () =>
        set((state) => ({
          curentTrackIndex:
            state.curentTrackIndex === 0
              ? state.tracks.length - 1
              : state.curentTrackIndex - 1,
        })),
      timeUp: (sec) =>
        set((state) => ({
          tracks: state.tracks.map((track, index) => {
            if (index === state.curentTrackIndex) {
              return {
                ...track,
                startTime:
                  track.startTime + sec > track.endTime ? 0 : track.startTime + sec,
              };
            }
            return track;
          }),
        })),
      timeDown: (sec) =>
        set((state) => ({
          tracks: state.tracks.map((track, index) => {
            if (index === state.curentTrackIndex) {
              return {
                ...track,
                startTime: track.startTime - sec <= 0 ? 0 : track.startTime - sec,
              };
            }
            return track;
          }),
        })),
    
      volumeUp: (vol) =>
        set((state) => ({
          volume: state.volume + vol >= 100 ? 100 : state.volume + vol,
        })),
    
      volumeDown: (vol) =>
        set((state) => ({
          volume: state.volume - vol <= 0 ? 0 : state.volume - vol,
        })),
        }), {
            name : "Music Player"
        }
    
    )



    )
    
