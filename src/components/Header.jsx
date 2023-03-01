import { useContext } from 'react'
import { myContext } from '../contexts'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { FaPause, FaPlay } from 'react-icons/fa'
import { BsArrowRepeat, BsChevronLeft, BsChevronRight, BsMusicNoteList, BsShuffle, BsStar, BsStarFill } from 'react-icons/bs'
import logo from '../assets/img/logo/main-logo.png'
import 'react-toastify/dist/ReactToastify.css'

const Header = ({ audioRef }) => {
  // useContext initializing
  const {
    songs,
    setSongs,
    favList,
    setFavList,
    activeFavList,
    setActiveFavList,
    activeFavSong,
    setActiveFavSong,
    audioHandler,
    setAudioHandler,
    currentSong,
    setCurrentSong,
    setPrevSong,
    songCurrentTime,
    setSongCurrentTime,
    songFullTime,
    setSongFullTime,
    playInOrderList,
    setPlayInOrderList,
    repeatCurrentSong,
    setRepeatCurrentSong,
    shuffelList,
    setShuffelList,
  } = useContext(myContext)
  
  // initializing use navigate
  const navigate = useNavigate()

  // second to minute function
  const getCleanTime = (time) => {
    return `${Math.floor(time / 60)}:${('0' + Math.floor(time % 60)).slice(-2)}`
  }

  // new songs and favorite songs function
  const addToFavList = () => {
    const newSongs = songs.map((item) => {
      if (item.id === currentSong[0].id) {
        if (!item.isFavorite) {
          setFavList([...favList, { ...item, isFavorite: !item.isFavorite }])
        } else {
          const newFavList = favList.filter((fav) => fav.id !== item.id)
          setFavList(newFavList)
        }
        return {
          ...item,
          isFavorite: !item.isFavorite
        }
      } else {
        return {
          ...item
        }
      }
    })
    setSongs(newSongs)
    setPrevSong([currentSong[0]])
    setCurrentSong([{
      ...currentSong[0],
      isFavorite: !currentSong[0].isFavorite
    }])
    if (!currentSong[0].isFavorite) {
      toast.success('Added to favorite list', { theme: 'dark' })
    } else {
      toast.warn('Removed from favorite list')
    }
  }

  // input title on hover function
  const timeTitleHover = (event) => {
    const element = event.target
    const mouseOffsetX = event.clientX
    const mouseParentOffsetX = element.offsetParent.offsetLeft
    if (mouseOffsetX < mouseParentOffsetX) {
      element.title = '0:00'
    } else {
      element.title = getCleanTime((songFullTime * (mouseOffsetX - mouseParentOffsetX)) / (element.offsetWidth))
    }
  }

  // go to next song function
  const getNext = () => {
    if (activeFavList && activeFavSong) {
      if (favList.length !== 0) {
        const index = favList.findIndex((item) => item.id === currentSong[0].id)
        if (playInOrderList || repeatCurrentSong) {
          if (index === favList.length - 1) {
            setPrevSong([currentSong[0]])
            setCurrentSong([favList[0]])
          } else {
            setPrevSong([currentSong[0]])
            setCurrentSong([favList[index + 1]])
          }
        } else if (shuffelList) {
          const shuffleIndex = Math.floor(Math.random() * favList.length)
          setPrevSong([currentSong[0]])
          setCurrentSong([favList[shuffleIndex]])
        }
      } else {
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
    } else {
      const index = songs.findIndex((item) => item.id === currentSong[0].id)
      if (playInOrderList || repeatCurrentSong) {
        if (index === songs.length - 1) {
          setPrevSong([currentSong[0]])
          setCurrentSong([songs[0]])
        } else {
          setPrevSong([currentSong[0]])
          setCurrentSong([songs[index + 1]])
        }
      } else if (shuffelList) {
        const shuffleIndex = Math.floor(Math.random() * songs.length)
        setPrevSong([currentSong[0]])
        setCurrentSong([songs[shuffleIndex]])
      }
    }
  }

  // go to previous song function
  const getBack = () => {
    if (activeFavList && activeFavSong) {
      if (favList.length !== 0) {
        const index = favList.findIndex((item) => item.id === currentSong[0].id)
        if (playInOrderList || repeatCurrentSong) {
          if (index == 0) {
            setPrevSong([currentSong[0]])
            setCurrentSong([favList[favList.length - 1]])
          } else if (index == -1) {
            setPrevSong([currentSong[0]])
            setCurrentSong([favList[0]])
          } else {
            setPrevSong([currentSong[0]])
            setCurrentSong([favList[index - 1]])
          }
        } else if (shuffelList) {
          const shuffleIndex = Math.floor(Math.random() * favList.length)
          setPrevSong([currentSong[0]])
          setCurrentSong([favList[shuffleIndex]])
        }
      } else {
        setPrevSong([currentSong[0]])
        setCurrentSong([songs[0]])
        setAudioHandler(false)
        setActiveFavList(false)
        setActiveFavSong(false)
        setSongCurrentTime(0)
        setSongFullTime(0)
        toast.warn('Select your favorite songs...')
        navigate('/')
        audioRef.current.currentTime = 0
      }
    } else {
      const index = songs.findIndex((item) => item.id === currentSong[0].id)
      if (playInOrderList || repeatCurrentSong) {
        if (index <= 0) {
          setPrevSong([currentSong[0]])
          setCurrentSong([songs[songs.length - 1]])
        } else {
          setPrevSong([currentSong[0]])
          setCurrentSong([songs[index - 1]])
        }
      } else if (shuffelList) {
        const shuffleIndex = Math.floor(Math.random() * songs.length)
        setPrevSong([currentSong[0]])
        setCurrentSong([songs[shuffleIndex]])
      }
    }
  }

  // play in order handle function
  const orderHandle = () => {
    setPlayInOrderList(true)
    setRepeatCurrentSong(false)
    setShuffelList(false)
    toast.info('Play songs in order', { theme: 'dark' })
  }

  // current song handle function
  const repeatHandle = () => {
    setRepeatCurrentSong(true)
    setPlayInOrderList(false)
    setShuffelList(false)
    toast.info('Repeat current song', { theme: 'dark' })
  }

  // shuffle list handle function
  const shuffleHandle = () => {
    setShuffelList(true)
    setRepeatCurrentSong(false)
    setPlayInOrderList(false)
    toast.info('Shuffle songs', { theme: 'dark' })
  }

  // jsx
  return (
    <header className='py-3 py-md-5'>
      <ToastContainer position='top-center' theme='dark' />
      <div className='container-fluid py-3 py-md-0 py-lg-3'>
        <div className='row align-items-md-center'>
          <div className='col-md-3 mb-4 mb-md-0'>
            <div className='music-cover position-relative' onClick={() => {
              setAudioHandler(!audioHandler)
            }}>
              <div className='music-filter position-absolute rounded-circle'
                title={currentSong[0].artist} style={{ backgroundImage: `url(${currentSong[0].cover})` }}></div>
              {(audioHandler) ? <FaPause size='7rem' color='#1db954' /> : <FaPlay size='7rem' color='#1db954' />}
            </div>
          </div>
          <div className='col-12 col-md-7 mt-3 mt-md-0'>
            <div className='d-flex flex-column justify-content-center music-description'>
              <div className='row'>
                <div className='col-10'>
                  <div className='music-title d-flex flex-column justify-content-around'>
                    <h1 className='ls-1'>{currentSong[0].name}</h1>
                    <h2 className='ls-1'>{currentSong[0].artist}</h2>
                  </div>
                </div>
                <div className='col-2 d-flex align-items-start justify-content-end favorite-star'>
                  <button className='btn p-0' title={(currentSong[0].isFavorite) ? 'Remove from favorites' : 'Add to favorites'}
                    onClick={addToFavList}
                  >
                    {(currentSong[0].isFavorite) ? <BsStarFill size='2.5rem' color='#1db954' /> : <BsStar size='2.5rem' color='#1db954' />}
                  </button>
                </div>
              </div>
              <div className='row music-range mt-4'>
                <div className='col-12'>
                  <div className='d-flex justify-content-between'>
                    <span className='current-time'>{getCleanTime(songCurrentTime)}</span>
                    <span className='full-time'>{(songFullTime) ? getCleanTime(songFullTime) : '0:00'}</span>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='range-slider w-100 position-relative mb-3'>
                    <div className='progress-custom h-100 position-absolute' style={{ width: `${(songCurrentTime / songFullTime) * 100}%` }}></div>
                    <input type='range' className='w-100 position-absolute' title='' min={0} max={(songFullTime) ? songFullTime : 0} value={songCurrentTime}
                      onChange={(event) => audioRef.current.currentTime = event.target.value}
                      onMouseMove={timeTitleHover}
                    />
                  </div>
                </div>
              </div>
              <div className='row justify-content-between music-nav'>
                <div className='col-5 col-lg-4'>
                  <div className='btn-toolbar btn-toolbar-custom-1'>
                    <button className='btn' title='Previous'
                      onClick={getBack}
                    >
                      <BsChevronLeft size='2rem' color='#fff' />
                    </button>
                    <button className='btn play-button' title={(audioHandler) ? 'Pause' : 'Play'}
                      onClick={() => {
                        setAudioHandler(!audioHandler)
                      }}
                    >
                      {(audioHandler) ? <FaPause size='2rem' color='#fff' /> : <FaPlay size='2rem' color='#fff' />}
                    </button>
                    <button className='btn' title='Next'
                      onClick={getNext}
                    >
                      <BsChevronRight size='2rem' color='#fff' />
                    </button>
                  </div>
                </div>
                <div className='col-5 col-lg-4'>
                  <div className='btn-toolbar justify-content-end btn-toolbar-custom-2'>
                    <button className={`ms-3 btn ${(playInOrderList) ? 'btn-dark' : ''}`} title='Play in order' onClick={orderHandle} >
                      <BsMusicNoteList size='2.3rem' color='#fff' />
                    </button>
                    <button className={`ms-3 btn ${(repeatCurrentSong) ? 'btn-dark' : ''}`} title='Repeat current song' onClick={repeatHandle} >
                      <BsArrowRepeat size='2.3rem' color='#fff' />
                    </button>
                    <button className={`ms-3 btn ${(shuffelList) ? 'btn-dark' : ''}`} title='Shuffle' onClick={shuffleHandle} >
                      <BsShuffle size='2.3rem' color='#fff' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-6 col-md-2 order-first order-md-last mb-4 mb-md-0'>
            <div className='main-logo d-flex justify-content-md-end align-items-center'>
              <div className='main-logo-box w-75 d-flex flex-column align-items-center'>
                <img src={logo} className={`rounded-circle me-4 me-md-0 mt-0 mt-lg-4 w-75 ${(audioHandler) ? 'img-rotate' : ''}`} />
                <h4 className='mt-2'><span>V</span><span>O</span><span className='me-2 me-lg-3 rounded-circle'>L</span><span>I</span><span>F</span></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header