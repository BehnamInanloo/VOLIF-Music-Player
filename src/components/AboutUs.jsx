import { memo, useContext } from 'react'
import { myContext } from '../contexts'

const AboutUs = () => {
  // useContext initializing
  const { mainHeight } = useContext(myContext)

  // jsx
  return (
    <div className='about-us-container d-flex flex-column' style={{height: mainHeight}}>
      <h2 className='mb-3 ls-1'>About us</h2>
      <p>Music Player with powerful equalizer, Quick search all your music files and music videos/MV, customize background skin and themes, is the best free music player, over millions downloads in all over the world, now free download music player/audio player.
        Music player is not only based on artists or albums, but also based on the folder structure. Music Player will guide you find all the music files in seconds, and supports you quick search relative music videos/MV through artist or track.
        The best free music player and media player!
        Replaceable background skin/theme make the Music Player extraordinarily brilliant.
        The unique equalizer make your music sounds more professional. You are free to control the music style and enjoy your musical.
        Hope everybody can enjoy the different music play experience.
      </p>
      <p className='mb-1'>
        <span className='text-info'>PLEASE NOTE: </span>
        This app is not an online music downloader, we not support free download songs service.
      </p>
      <h5 className='badge custom-badge mt-1'>
        Updated on Feb 22, 2023
      </h5>
    </div>

  )
}
export default memo(AboutUs)