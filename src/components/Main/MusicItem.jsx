import { memo, useContext } from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs'
import { myContext } from '../../contexts'

const MusicItem = ({
  cover,
  artist,
  name,
  id,
  played,
  isFavorite,
  duration }) => {

  const {
    songs,
    setSongs,
    favList,
    setFavList,
    activeFavList,
    setActiveFavSong,
    currentSong,
    setCurrentSong,
    setPrevSong,
    audioHandler
  } = useContext(myContext)

  // second to minute function
  const getCleanTime = (time) => {
    return `${Math.floor(time / 60)}:${('0' + Math.floor(time % 60)).slice(-2)}`
  }

  // set new currentSong function
  const checkActiveSong = () => {
    const activeSong = songs.filter((item) => item.id === id)
    setPrevSong([currentSong[0]])
    setCurrentSong(activeSong)
    if (activeFavList) {
      setActiveFavSong(true)
    }
  }

  // add or remove a music to favorite list
  const favoriteHandler = () => {
    const newSongs = songs.map((item) => {
      if(item.id === id) {
        if(!item.isFavorite) {
          setFavList([...favList, {...item, isFavorite: !item.isFavorite}])
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
    if(currentSong[0].id === id) {
      setCurrentSong([{
        ...currentSong[0],
        isFavorite: !currentSong[0].isFavorite
      }])
    }
  }

  // jsx
  return (
    <div className={`music-item d-flex align-items-center position-relative mb-5
      ${(currentSong[0].id === id) ? 'active-music' : ''}`}>
      <div className='music-item-cover h-100 d-flex align-items-center me-1' onClick={checkActiveSong}>
        <div className='music-image me-0 rounded-circle' style={{ backgroundImage: `url(${cover})` }}></div>
      </div>
      <div className='music-item-desc h-100 flex-grow-1 d-flex justify-content-between align-items-center'>
        <div className='h-100 d-flex flex-column justify-content-center music-item-title' onClick={checkActiveSong}>
          <h3>{artist}</h3>
          <h5>{name}</h5>
          {(played) ? <h6>{played} played</h6> : ''}
        </div>
        {(currentSong[0].id === id && audioHandler) ?
          <div className='d-flex justify-content-between align-items-center equ-boxes'>
            <div className='equ-box equ-box-active ms-1'></div>
            <div className='equ-box equ-box-active ms-1'></div>
            <div className='equ-box equ-box-active ms-1'></div>
            <div className='equ-box equ-box-active ms-1'></div>
          </div>
          : (currentSong[0].id === id && !audioHandler) ?
            <div className='d-flex justify-content-between align-items-center equ-boxes'>
              <div className='equ-box ms-1'></div>
              <div className='equ-box ms-1'></div>
              <div className='equ-box ms-1'></div>
              <div className='equ-box ms-1'></div>
            </div>
            : ''}
      </div>
      <div className='music-item-options h-100 d-flex justify-content-between align-items-center'>
        <span>{(duration) ? getCleanTime(duration) : '0:00'}</span>
        <button className='btn' onClick={favoriteHandler}>
          {(isFavorite) ? <BsStarFill size='1.8rem' color='#1db954' /> : <BsStar size='1.8rem' color='#1db954' />}
        </button>
      </div>
    </div>
  )
}
export default memo(MusicItem)