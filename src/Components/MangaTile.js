import React from 'react'

function MangaTile({manga}) {
    const {title} = manga
  return (
    <div>
        <div>
            <img src={manga.images.jpg.image_url} alt={title} />
        </div>
        <div>
            <h5>{title}</h5>
            
        </div>
    </div>
  )
}
export default MangaTile;