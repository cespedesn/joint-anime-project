import React, { useState, useEffect } from 'react'
import Header from './Header'
import AnimeList from './AnimeList'
import SideBar from './SideBar';
import SearchBar from './SearchBar'
import MangaList from './MangaList';

function AnimePage() {
  const [animeList, setAnimeList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [mangaList, setMangaList] = useState([]);

 const getTopAnimeList = useEffect(() => {
    fetch (`https://api.jikan.moe/v4/top/anime`)
    .then(res => res.json())
    .then(data => {
      setAnimeList(data.data.slice(0,8));
        
    })
  }, [])
  
  
  

  return (
   <div>
     <Header 
     animeList={animeList} 
     setAnimeList={setAnimeList}/>
     <SideBar />
     <SearchBar />
     <div>
      <AnimeList animeList={animeList} />
      <MangaList mangaList={mangaList} setMangaList={setMangaList}/>
     </div>
   </div>
  )
}
export default AnimePage;