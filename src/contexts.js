import { createContext, useState } from 'react'
import musicsList from './util'

export const myContext = createContext({
  songs: '', setSongs: '',
  audioHandler: '', setAudioHandler: '',
  currentSong: '', setCurrentSong: '',
  prevSong: '', setPrevSong: '',
  songCurrentTime: '', setSongCurrentTime: '',
  songFullTime: '', setSongFullTime: '',
  playInOrderList: '', setPlayInOrderList: '',
  repeatCurrentSong: '', setRepeatCurrentSong: '',
  shuffelList: '', setShuffelList: '',
  favList: '', setFavList: '',
  mainHeight: '', setMainHeight: ''
})

const Context = ({ children }) => {
  // state initializing
  const [songs, setSongs] = useState(musicsList())
  const [audioHandler, setAudioHandler] = useState(false)
  const [currentSong, setCurrentSong] = useState([songs[0]])
  const [prevSong, setPrevSong] = useState([{
    id: '',
    cover: '',
    artist: '',
    name: '',
    isFavorite: '',
    audio: '',
    duration: '',
    played: ''
  }])
  const [songCurrentTime, setSongCurrentTime] = useState(0)
  const [songFullTime, setSongFullTime] = useState(0)
  const [playInOrderList, setPlayInOrderList] = useState(true)
  const [repeatCurrentSong, setRepeatCurrentSong] = useState(false)
  const [shuffelList, setShuffelList] = useState(false)
  const [favList, setFavList] = useState([])
  const [mainHeight, setMainHeight] = useState(0)

  // jsx
  return (
    <myContext.Provider value={{
      songs, setSongs,
      audioHandler, setAudioHandler,
      currentSong, setCurrentSong,
      songCurrentTime, setSongCurrentTime,
      prevSong, setPrevSong,
      songFullTime, setSongFullTime,
      repeatCurrentSong, setRepeatCurrentSong,
      shuffelList, setShuffelList,
      playInOrderList, setPlayInOrderList,
      favList, setFavList,
      mainHeight, setMainHeight
    }}>
      {children}
    </myContext.Provider>
  )
}
export default Context