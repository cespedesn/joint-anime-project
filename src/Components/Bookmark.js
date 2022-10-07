import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useLocation } from 'react-router'

function Bookmark() {
const [itemList, setItemList] = useState([]);
  const [filteredItemList, setFilteredItemList] = useState([]);
  const [isAnime, setIsAnime] = useState(false)
  const location = useLocation()

  useEffect(() => {
    fetch("http://localhost:3000/item")
    .then((res) => res.json())
    .then(data =>{
      setFilteredItemList(data)
      setItemList(data)
      })
  },[location.key])


function handleIsAnime(e){
  setIsAnime(!isAnime)
}

function handleDelete(id){
  console.log(id)
  fetch(`http://localhost:3000/item/${id}`, {
    method: "DELETE"
})
    .then(() => {
    const filteredItems = itemList.filter(item => item.id !== id)
    setFilteredItemList(filteredItems)
    setItemList(filteredItems)}
    )
}

function handleFilterList(value){
  if(value === "all"){
    setFilteredItemList(itemList)
  } else{
  const itemListFiltered = itemList.filter((item) => item[value])
  setFilteredItemList(itemListFiltered)
  }
}



  return (
   <div>
    <div className='btn-div'>
        <button className= "bookmark-btn"
        onClick={() => handleFilterList("all")}
        >All</button>
        <button className= "bookmark-btn"
        onClick={() => handleFilterList("manga")}
        >Manga</button>
        <button className= "bookmark-btn"
        onClick={() => handleFilterList("anime")}
        >Anime</button>
    </div>
     <div className="itemList">
       <ItemList
       handleDelete={handleDelete}
       items={filteredItemList}/>
     </div>
   </div>
  )
}


export default Bookmark