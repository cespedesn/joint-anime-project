import React from 'react'

function MangaTile({manga}) {
    const {title, image} = manga
  return (
    <div>
        <div>
            <img src={image} alt={title} />
        </div>
        <div>
            <h5>{title}</h5>
            
        </div>
    </div>
  )
}
export default MangaTile;