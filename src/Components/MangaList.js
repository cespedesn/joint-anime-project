import React from 'react'
import MangaTile from './MangaTile'

function MangaList({mangaList, setMangaList, isOpen, setIsOpen}) {
    
const topMangaList = 
    fetch(`https://api.jikan.moe/v4/top/manga`)
    .then(res => res.json())
    .then(data => {
        setMangaList(data.data.slice(0,8));
        
    })
    const topManga = mangaList?.map((manga) => {
        return (
            <MangaTile 
                key={manga.mal_id}
                manga={manga}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        )
    })
    
  return (
    <div className='grid-container'>
        <div className='header'><h1 className='h1'>Manga</h1></div>
        <div className='grid'>
            {topManga}
        </div>
    </div>
  )
}
export default MangaList;