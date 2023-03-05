import { useRef, useEffect, useContext } from 'react'
import { myContext } from './contexts'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from './components/Header'
import SideBar from './components/SideBar'

const Layout = ({ children }) => {
  // useContext initializing
  const {
    songs,
    setSongs,
    favList,
    activeFavList,
    setActiveFavList,
    activeFavSong,
    setActiveFavSong,
    audioHandler,
    setAudioHandler,
    currentSong,
    setCurrentSong,
    prevSong,
    setPrevSong,
    setSongCurrentTime,
    songFullTime,
    setSongFullTime,
    playInOrderList,
    repeatCurrentSong
  } = useContext(myContext)

  // useNavigate initializing
  const navigate = useNavigate()

  // useRef initializing
  const audioRef = useRef()
  const jumpRef = useRef()

  // useEffect initializing for handling audio play, pause, currentTime & duration
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

  // useEffect initializing for updating duration in MusicItem.jsx
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

  // reset function
  const listReset = () => {
    setPrevSong([currentSong[0]])
    setCurrentSong([songs[0]])
    setAudioHandler(false)
    setActiveFavList(false)
    setActiveFavSong(false)
    setSongCurrentTime(0)
    setSongFullTime(0)
    toast.warn('Select your favorite songs')
    navigate('/')
    audioRef.current.currentTime = 0
  }

  // Function for handling newSongs 
  const newSongsHandler = () => {
    if (audioHandler) {
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

  // Function for automatically going to next song
  const nextMusicHandler = () => {
    if ((activeFavList && activeFavSong) || (!activeFavList && activeFavSong)) {
      if (favList.length !== 0) {
        const index = favList.findIndex((item) => item.id === currentSong[0].id)
        if (playInOrderList) {
          if (index === favList.length - 1) {
            setPrevSong([currentSong[0]])
            setCurrentSong([favList[0]])
          } else {
            setPrevSong([currentSong[0]])
            setCurrentSong([favList[index + 1]])
          }
        } else if (repeatCurrentSong) {
          setPrevSong([currentSong[0]])
          setCurrentSong([currentSong[0]])
          newSongsHandler()
        } else {
          const shuffleIndex = Math.floor(Math.random() * favList.length)
          setPrevSong([currentSong[0]])
          setCurrentSong([favList[shuffleIndex]])
        }
      } else {
        listReset()
      }
    } else {
      const index = songs.findIndex((item) => item.id === currentSong[0].id)
      if (playInOrderList) {
        if (index === songs.length - 1) {
          setPrevSong([currentSong[0]])
          setCurrentSong([songs[0]])
        } else {
          setPrevSong([currentSong[0]])
          setCurrentSong([songs[index + 1]])
        }
      } else if (repeatCurrentSong) {
        setPrevSong([currentSong[0]])
        setCurrentSong([currentSong[0]])
        newSongsHandler()
      } else {
        const shuffleIndex = Math.floor(Math.random() * songs.length)
        setPrevSong([currentSong[0]])
        setCurrentSong([songs[shuffleIndex]])
      }
    }
  }

  // Function for jumping to top
  window.addEventListener('scroll', function () {
    const jumpBtn = jumpRef.current
    if (jumpBtn != undefined) {
      const jumpBtnClasses = jumpBtn.classList
      if (this.scrollY < 500) {
        jumpBtnClasses.add('d-none')
        jumpBtnClasses.remove('d-inline-block')
      } else {
        jumpBtnClasses.remove('d-none')
        jumpBtnClasses.add('d-inline-block')
      }
    }
  })

  // jsx
  return (
    <>
      <Header audioRef={audioRef} listReset={listReset} />
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
                <button ref={jumpRef} className='border-0 d-none rounded-circle jump-to-top'
                  onClick={() => window.location = '#'}
                >
                  &#8593;
                </button>
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