import React from 'react'
import { FiEye } from 'react-icons/fi'
import { BsPencilSquare } from 'react-icons/bs'
import { IoMdTrash } from'react-icons/io'
import { Link } from 'react-router-dom'

 function ItemTile({ anime, handleDelete }) {
 const {title, bookmark, website, image, id} = anime
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
    <div className='itemCard'>
      <a
        href={website}
        target='_blank'
        rel="noreferrer">
          <img
            src={image} alt="Item"/>
       </a>
       <div className='tileFooter'>
        <h5>Ch/Episode: {bookmark}</h5>
        <h5>{title}</h5>
        <a
        href={website}
        target="_blank"
        rel="noreferrer">
       <button><FiEye /></button>
       </a>
        <Link to={`/edit/${id}`} >
          <button><BsPencilSquare /></button>
        </Link>
        <button onClick={() =>{handleDelete(id)}}><IoMdTrash /></button>
       </div>
    </div>
  )
}
export default ItemTile