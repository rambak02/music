import { getTracks } from "@/api/api";
import { addLike, fetchFavoriteTracks, removeLike } from "@/api/userApi";
import { TrackType } from "@/types/type";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getAllTracks = createAsyncThunk("playlist/getTracks", async () => {
  try {
    const allTracks = await getTracks();
    return allTracks;
  } catch (error) {
    return null;
  }
});
export const getFavoriteTracks = createAsyncThunk(
  "playlist/getFavoriteTracks",
  async ({ access }: { access: string }) => {
    const favoriteTracks = await fetchFavoriteTracks({ access });
    return favoriteTracks;
  }
);
export const addLikeInTrack = createAsyncThunk(
  "playlist/addFavoriteTracks",
  async ({ access, id }: LikesType) => {
    const likedTrack = await addLike({ access, id });
    return likedTrack;
  }
);

export const removeLikeInTrack = createAsyncThunk(
  "playlist/removeFavoriteTracks",
  async ({ access, id }: LikesType) => {
    const dislikedTrack = await removeLike({ access, id });
    return dislikedTrack;
  }
);
type PlaylistStateType = {
  isPlaying: boolean;
  currentTrack: TrackType | null;
  tracks: TrackType[];
  isShuffled: boolean;
  shuffledPlaylist: TrackType[];
  likedTracks: TrackType[];
  initialPlaylist: TrackType[];
  searchFilter: {
    author: string[];
    genre: string[];
    orderSorting: string;
    searchString: string;
  };
  filteredPlaylist: TrackType[];
};
type LikesType = {
  access: string;
  id: number;
};
const initialState: PlaylistStateType = {
  isPlaying: false,
  currentTrack: null,
  tracks: [],
  isShuffled: false,
  shuffledPlaylist: [],
  likedTracks: [],
  initialPlaylist: [],
  searchFilter: {
    author: [],
    genre: [],
    orderSorting: "По умолчанию",
    searchString: "",
  },
  filteredPlaylist: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentPlaylist: (state, action: PayloadAction<TrackType[]>) => {
      state.tracks = action.payload;
      state.filteredPlaylist = action.payload;
      state.initialPlaylist = action.payload;
    },
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
    setInitialPlaylist: (state, action: PayloadAction<TrackType[]>) => {
      state.initialPlaylist = action.payload;
    },
    setFilter: (
      state,
      action: PayloadAction<{
        author?: string[];
        genre?: string[];
        orderSorting?: string;
        searchString?: string;
      }>
    ) => {
      state.searchFilter = {
        author: action.payload.author || state.searchFilter.author,
        genre: action.payload.genre || state.searchFilter.genre,
        orderSorting:
          action.payload.orderSorting || state.searchFilter.orderSorting,
        searchString:
          action.payload.searchString || state.searchFilter.searchString,
      };
      const filterTracks = [...state.initialPlaylist].filter((track) => {
        const searchString = track.name
          .toLocaleLowerCase()
          .includes(state.searchFilter.searchString.toLocaleLowerCase());
        const hasAuthorFilter =
          state.searchFilter.author.length > 0
            ? state.searchFilter.author.includes(track.author)
            : true;
        const hasGenreFilter =
          state.searchFilter.genre.length > 0
            ? state.searchFilter.genre.includes(track.genre)
            : true;
        return searchString && hasAuthorFilter && hasGenreFilter;
      });
      switch (state.searchFilter.orderSorting) {
        case "Сначала новые":
          filterTracks.sort(
            (a, b) =>
              new Date(b.release_date).getTime() -
              new Date(a.release_date).getTime()
          );
          break;
        case "Сначала старые":
          filterTracks.sort(
            (a, b) =>
              new Date(a.release_date).getTime() -
              new Date(b.release_date).getTime()
          );
          break;
        default:
          filterTracks
          break;
      }
      state.filteredPlaylist = filterTracks;
    },
    resetFilters: (state) => {
      state.searchFilter = {
        author: [],
        genre: [],
        orderSorting: "По умолчанию",
        searchString: "",
      };
      state.filteredPlaylist = state.tracks;
    },
    nextTrack: (state) => {
      const playlist = state.isShuffled ? state.shuffledPlaylist : state.tracks;
      const currentIndex = playlist.findIndex(
        (track) => track._id === state.currentTrack?._id
      );
      const nextIndex = currentIndex + 1;
      if (nextIndex >= playlist.length) {
        return;
      }
      state.currentTrack = playlist[nextIndex];
      state.isPlaying = true;
    },
    prevTrack: (state) => {
      const playlist = state.isShuffled ? state.shuffledPlaylist : state.tracks;
      const currentIndex = playlist.findIndex(
        (track) => track._id === state.currentTrack?._id
      );
      const prevIndex = currentIndex - 1;
      if (prevIndex < 0) {
        return;
      }
      state.currentTrack = playlist[prevIndex];
      state.isPlaying = true;
    },
    toggleShuffleTrack: (state) => {
      state.isShuffled = !state.isShuffled;
    },
    togglePlayingTrack: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setPlaylist: (state, action: PayloadAction<{ tracks: TrackType[] }>) => {
      state.tracks = action.payload.tracks;
      state.filteredPlaylist = action.payload.tracks;
    },
    likeTrack: (state, action: PayloadAction<TrackType>) => {
      state.likedTracks.push(action.payload);
    },
    dislike: (state, action: PayloadAction<TrackType>) => {
      state.likedTracks = state.likedTracks.filter(
        (el) => el._id !== action.payload._id
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(
      getFavoriteTracks.fulfilled,
      (state, action: PayloadAction<TrackType[]>) => {
        if (action.payload) {
          state.likedTracks = action.payload;
        }
      }
    );
  },
});

export const {
  setCurrentPlaylist,
  setCurrentTrack,
  setInitialPlaylist,
  nextTrack,
  prevTrack,
  toggleShuffleTrack,
  togglePlayingTrack,
  setPlaylist,
  likeTrack,
  dislike,
  setFilter,
  resetFilters
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
