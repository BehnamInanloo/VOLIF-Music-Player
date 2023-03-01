import { memo, useContext } from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import { myContext } from '../contexts'
import MusicItem from './Main/MusicItem'

const Favorite = () => {
  // useContext initializing
  const { favList, mainHeight } = useContext(myContext)

  // jsx
  return (
    <main className='music-container' style={{ height: mainHeight }}>
      <h2 className='mb-4 mb-sm-5 ls-1'>Favorite list</h2>
      {(favList.length === 0) ? <p className='alert alert-success alert-custom'> <BsInfoCircleFill size='2.3rem' /> Your favorite list is now empty! Please select your favorite songs...</p> :
        favList.map((item) => (
          <MusicItem
            cover={item.cover}
            artist={item.artist}
            name={item.name}
            key={item.id}
            id={item.id}
            duration={item.duration}
            isFavorite={item.isFavorite}
          />
        ))
      }
    </main>
  )
}
export default memo(Favorite)