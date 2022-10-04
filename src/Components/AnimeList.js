import React from 'react'
import AnimeTile from './AnimeTile'

 function AnimeList({ animeList }) {
    const topAnimes = animeList.map((anime) => {
      return (
            <AnimeTile
              key={anime.mal_id}
              anime={anime}
              />
        )
    } )
  return (
    <div>
    {topAnimes}
    </div>
  )
}
export default AnimeList