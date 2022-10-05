import React, { useState, useEffect } from 'react'
import Header from './Header'
import AnimeList from './AnimeList'
import AnimeSearchBar from './AnimeSearchBar'
import MangaSearchBar from './MangaSearchBar';
import MangaList from './MangaList';
import SideBar from './SideBar';
import { FaBars } from 'react-icons/fa';


function AnimePage({isOpen, setIsOpen}) {
  const [animeList, setAnimeList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [mangaList, setMangaList] = useState([]);
  const [mangaSearchTerm, setMangaSearchTerm] = useState('');
  
  

 const getTopAnimeList = useEffect(() => {
    fetch (`https://api.jikan.moe/v4/top/anime?limit=8`)
    .then(res => res.json())
    .then(data => {
      setAnimeList(data.data.slice(0,8));
        
    })
  }, [])
  
  const [hideSideBar, setHideSideBar] = useState(false);
      const handleHideSideBar = () => {
        setHideSideBar(hideSideBar => !hideSideBar);
      }
  const animeToDisplay =
  animeList.filter(anime => anime.title.toLowerCase().includes(searchTerm.toLowerCase()))

  const mangaToDisplay =
  mangaList.filter(manga => manga.title.toLowerCase().includes(mangaSearchTerm.toLowerCase()))
  


  return (
   <div>
     <Header 
     animeList={animeList} 
     setAnimeList={setAnimeList}/>
     <aside className='sidebar-parent'>
      <aside className='sidebar-child'>
          <buton className = "sidebar-btn" 
            onClick ={handleHideSideBar}> Nav </buton>  
            {hideSideBar ? 
            <SideBar 
            hideSideBar={hideSideBar}
            /> : null}
        </aside>
      </aside> 
      
     <div>
      <div className='animelist-component'>
          <AnimeSearchBar 
          setAnimeList={setAnimeList}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm} />
          </div>
          <div></div>
          <AnimeList 
          animeList={animeToDisplay} 
          isOpen={isOpen} 
          setIsOpen={setIsOpen}/>
          <div>
          
      </div>
        <div className='mangalist-component'>
          <div> 
              <MangaSearchBar 
              setMangaList={setMangaList}
              mangaSearchTerm={mangaSearchTerm}
              setMangaSearchTerm={setMangaSearchTerm} 
              />
          </div>
            <MangaList 
            mangaList={mangaToDisplay} 
            setMangaList={setMangaList} 
            isOpen={isOpen} 
            setIsOpen={setIsOpen}/>
        </div>
     </div>
   </div>
  )
}
export default AnimePage;