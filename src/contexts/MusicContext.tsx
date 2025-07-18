import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Song {
  id: string;
  title: string;
  artist: string;
  cover: string;
  price?: string;
  audio?: string; // Audio file URL
}

interface MusicContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  progress: number;
  setCurrentSong: (song: Song) => void;
  togglePlayPause: () => void;
  setProgress: (progress: number) => void;
  playNext: () => void;
  playPrevious: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const useMusicPlayer = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusicPlayer must be used within a MusicProvider');
  }
  return context;
};

interface MusicProviderProps {
  children: ReactNode;
}

export const MusicProvider: React.FC<MusicProviderProps> = ({ children }) => {
  const [currentSong, setCurrentSongState] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const setCurrentSong = (song: Song) => {
    setCurrentSongState(song);
    setIsPlaying(true);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    // TODO: Implement playlist logic
    console.log('Playing next song');
  };

  const playPrevious = () => {
    // TODO: Implement playlist logic
    console.log('Playing previous song');
  };

  return (
    <MusicContext.Provider
      value={{
        currentSong,
        isPlaying,
        progress,
        setCurrentSong,
        togglePlayPause,
        setProgress,
        playNext,
        playPrevious,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};