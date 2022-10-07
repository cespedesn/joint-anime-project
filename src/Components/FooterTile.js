import React from 'react'

function FooterTile({ recommend }) {
    const {title} = recommend.entry[0].images.jpg.image_url
    // const {h4} =  recommend.entry[0].image.title
    console.log(recommend)

  return (

    <article className="recommend-card">
      <a
        href={recommend.url}
        target='_blank' 
        rel="noreferrer">
          <figure>
              <img 
              className='recommend-image'
              src={recommend.entry[0].images.jpg.image_url} alt={title}/>
          </figure>
          <h4>{title}</h4>
      </a>
    </article>
  )
}

export default FooterTile;