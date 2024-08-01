import { TrackType } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistStateType = {
  isPlaying: boolean;
  currentTrack: TrackType | null;
  tracks: TrackType[];
  isShuffled: boolean;
  shuffledPlaylist: TrackType[];
};

const initialState: PlaylistStateType = {
  isPlaying: false,
  currentTrack: null,
  tracks: [],
  isShuffled: false,
  shuffledPlaylist: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentTrack: (
      state,
      action: PayloadAction<{ currentTrack: TrackType; tracks: TrackType[] }>
    ) => {
      state.currentTrack = action.payload.currentTrack;
      state.tracks = action.payload.tracks;
      state.shuffledPlaylist = [...action.payload.tracks].sort(
        () => 0.5 - Math.random()
      );
      state.isPlaying = true;
    },
    nextTrack: (state) => {
      const playlist = state.isShuffled ? state.shuffledPlaylist : state.tracks
      const currentIndex = playlist.findIndex((track)=> track.id === state.currentTrack?.id)
      const nextIndex = currentIndex + 1;
      if (nextIndex >= playlist.length) {
        return
      }
        state.currentTrack = playlist[nextIndex]
      state.isPlaying = true;
    },
    prevTrack: (state) => {
      const playlist = state.isShuffled ? state.shuffledPlaylist : state.tracks
      const currentIndex = playlist.findIndex((track)=> track.id === state.currentTrack?.id)
      const prevIndex = currentIndex - 1;
      if (prevIndex < 0) {
        return
      }
        state.currentTrack = playlist[prevIndex]
      state.isPlaying = true;
    },
    toggleShuffleTrack: (state) => {
      state.isShuffled = !state.isShuffled
    },
    togglePlayingTrack: (state) => {
      state.isPlaying = !state.isPlaying
    } 
  },
});

export const { setCurrentTrack, nextTrack, prevTrack, toggleShuffleTrack, togglePlayingTrack } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
