import React from 'react'
import ItemTile from './ItemTile'

function ItemList({ items, handleDelete }) {
 if(!items || items.length === 0 ){return null}
  const yourItems = items.map((anime) => {
      return (
            <ItemTile
              handleDelete={handleDelete}
              key={anime.mal_id}
              anime={anime}
              />
        )
    } )
  return (
      <div className='grid-bookmark'>
      {yourItems}
      </div>
  )
}
export default ItemList