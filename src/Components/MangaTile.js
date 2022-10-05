import React from 'react';


function MangaTile({manga}) {
    const {title} = manga

  return (

    <article className="anime-card">
      <a
        href={manga.url}
        target='_blank' 
        rel="noreferrer">
          <figure>
              <img 
              className='manga-image'
              src={manga.images.jpg.image_url} alt={title}/>
          </figure>
          <h4>{title}</h4>
      </a>
    </article>
  )
}
export default MangaTile;

