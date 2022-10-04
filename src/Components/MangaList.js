import React from 'react'
import MangaTile from './MangaTile'

function MangaList({mangaList, setMangaList}) {
    
const topMangaList = 
    fetch(`https://api.jikan.moe/v4/top/manga`)
    .then(res => res.json())
    .then(data => {
        setMangaList(data.data.slice(0,5));
        
    })
    const topManga = mangaList.map((manga) => {
        return (
            <MangaTile 
                key={manga.mal_id}
                manga={manga}
            />
        )
    })
    console.log(topManga);
  return (
   
    <div>{topManga}</div>
  )
}
export default MangaList;