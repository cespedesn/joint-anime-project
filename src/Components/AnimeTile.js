import React from 'react'
 function AnimeTile({ anime }) {
 const {title, image_url} = anime
 console.log(image_url);
  return (
    // <div>
    //   <div>
    //    <img src={image} alt={title} />
    //   </div>
    //   <div>
    //    <h2>{title}</h2>
    //    <p>{bookmark}</p>
    //   </div>
    // </div>
    <article className="anime-card">
			<a 
				href={anime.url}  
				rel="noreferrer">
				<figure>
					<img 
						src={image_url} alt="Anime"/>
				</figure>
				<h5>{title}</h5>
			</a>
		</article>



  )
}
export default AnimeTile