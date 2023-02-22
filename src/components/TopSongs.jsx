import { memo, useContext } from 'react'
import { myContext } from '../contexts'
import MusicItem from './Main/MusicItem'

const TopSongs = () => {
  // useContext initializing
  const { songs, setPrevSong, setCurrentSong, currentSong, audioHandler, mainHeight } = useContext(myContext)

  // jsx
  return (
    <div className='music-container' style={{height: mainHeight}}>
      <h2 className='mb-4 mb-sm-5 ls-1'>Top player songs</h2>
      {songs.map((item) => {
        if (item.played > 10) {
          return (
            <MusicItem
              cover={item.cover}
              artist={item.artist}
              name={item.name}
              key={item.id}
              id={item.id}
              duration={item.duration}
              played={item.played}
              isFavorite={item.isFavorite}
              songs={songs}
              setPrevSong={setPrevSong}
              setCurrentSong={setCurrentSong}
              currentSong={currentSong}
              audioHandler={audioHandler}
            />
          )
        }
      })}
    </div>
  )
}
export default memo(TopSongs)