import { useRef, useEffect, useContext } from 'react'
import { myContext } from './contexts'
import { FaAngleUp } from "react-icons/fa"

import Header from './components/Header'
import SideBar from './components/SideBar'

const Layout = ({ children }) => {
  // useContext initializing
  const { audioHandler, setSongCurrentTime, setSongFullTime, prevSong, currentSong, setPrevSong, setCurrentSong, songs,
    playInOrderList, repeatCurrentSong, songFullTime, setSongs } = useContext(myContext)

  // useRef initializing
  const audioRef = useRef()

  // useEffect initializing for audio play, pause, currentTime & duration
  useEffect(() => {
    const playPromise = audioRef.current.play()

    if (playPromise !== undefined) {
      playPromise.then(() => {
        if (audioHandler) audioRef.current.play()
        else audioRef.current.pause()
      }).catch((err) => console.log(err))
    }

    setInterval(() => {
      setSongCurrentTime(audioRef.current.currentTime)
      setSongFullTime(audioRef.current.duration)
    }, 1000)

    if (audioHandler) {
      if (prevSong[0].id != currentSong[0].id) {
        setPrevSong([currentSong[0]])
        const newSongs = songs.map((item) => {
          if (item.id === currentSong[0].id) {
            return {
              ...item,
              played: item.played + 1
            }
          } else {
            return item
          }
        })
        setSongs(newSongs)
      }
    }
  }, [audioHandler, currentSong])

  // useEffect initializing for duration updating in MusicItem.jsx
  useEffect(() => {
    const newSongs = songs.map((item) => {
      if (item.id === currentSong[0].id) {
        return {
          ...item,
          duration: songFullTime
        }
      } else {
        return item
      }
    })
    setSongs(newSongs)
  }, [songFullTime])

  // automatic go to next song function
  const nextMusicHandler = () => {
    const index = songs.findIndex((item) => item.id === currentSong[0].id)
    if (playInOrderList) {
      if (index === songs.length - 1) {
        setCurrentSong([songs[0]])
      } else {
        setCurrentSong([songs[index + 1]])
      }
    } else if (repeatCurrentSong) {
      setCurrentSong([currentSong[0]])
    } else {
      const shuffleIndex = Math.floor(Math.random() * songs.length)
      setCurrentSong([songs[shuffleIndex]])
    }
  }

  // jsx
  return (
    <>
      <Header audioRef={audioRef} />
      <audio ref={audioRef} src={currentSong[0].audio}
        onEnded={nextMusicHandler}></audio>
      <main>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4'>
              <SideBar />
            </div>
            <div className='col-md-8'>
              <div className='d-md-none'>
                <a href='#' className='jump-to-top rounded-circle p-3 d-inline-block'>
                  <FaAngleUp size='2.2rem' color='#efefef' />
                </a>
              </div>
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default Layout