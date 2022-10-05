import React from 'react'
import AnimeSearchBar from './AnimeSearchBar'


 function AnimeTile({anime}) {
 const {title} = anime
 
  return (

    <article className="anime-card">
			<a 
				href={anime.url}  
        target='_blank' 
				rel="noreferrer">
				<figure>
					<img 
            className='tile-image'
						src={anime.images.jpg.image_url} alt={title}/>
				</figure>
				<h4>{title}</h4>
			</a>
		</article>
  )
}
export default AnimeTile