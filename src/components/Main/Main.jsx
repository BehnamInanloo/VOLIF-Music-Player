import { memo, useContext } from 'react'
import { myContext } from '../../contexts'
import MusicItem from './MusicItem'

const Main = () => {
  // useContext initializing
  const { songs, setPrevSong, setCurrentSong, currentSong, audioHandler, mainHeight } = useContext(myContext)

  // jsx
  return (
    <main className='music-container' style={{ height: mainHeight }}>
      <h2 className='mb-4 mb-sm-5 ls-1'>All songs</h2>
      {songs.map((item) => (
        <MusicItem
          cover={item.cover}
          artist={item.artist}
          name={item.name}
          key={item.id}
          id={item.id}
          isFavorite={item.isFavorite}
          duration={item.duration}
          songs={songs}
          setPrevSong={setPrevSong}
          setCurrentSong={setCurrentSong}
          currentSong={currentSong}
          audioHandler={audioHandler}
        />)
      )}
    </main>
  )
}
export default memo(Main)