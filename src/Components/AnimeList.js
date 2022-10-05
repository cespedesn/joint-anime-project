import React from 'react'
import AnimeTile from './AnimeTile'


 function AnimeList({ animeList, isOpen, setIsOpen}) {
    const topAnimes = animeList.map((anime) => {
      return (
            <AnimeTile
              key={anime.mal_id}
              anime={anime}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              />
        )
    } )
    
      
  return (
    <div className='grid-container'>
      <div className='header'><h1>Anime</h1></div>
      <div className='grid'>
        {topAnimes}
      </div>
    </div>
  )
}
export default AnimeList;