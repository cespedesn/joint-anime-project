import React, { useState, useEffect } from 'react'
import Header from './Header'
import AnimeList from './AnimeList'
import AnimeSearchBar from './AnimeSearchBar'
import MangaSearchBar from './MangaSearchBar';
import MangaList from './MangaList';
import SideBar from './SideBar';
import Footer from './Footer';
import Bookmark from './Bookmark';
import { Link } from "react-router-dom"
import { FaBars } from 'react-icons/fa';
function AnimePage({isOpen, setIsOpen}) {
  const [animeList, setAnimeList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [mangaList, setMangaList] = useState([]);
  const [mangaSearchTerm, setMangaSearchTerm] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [showRecommendations, setShowRecommendations] = useState(false)
 const getTopAnimeList = useEffect(() => {
    fetch (`https://api.jikan.moe/v4/top/anime?limit=8`)
    .then(res => res.json())
    .then(data => {
      setAnimeList(data.data?.slice(0,8));
    })
  }, [])
  const [hideSideBar, setHideSideBar] = useState(false);
      const handleHideSideBar = () => {
        setHideSideBar(hideSideBar => !hideSideBar);
      }
  const animeToDisplay =
  animeList?.filter(anime => anime.title.toLowerCase().includes(searchTerm.toLowerCase()))
  const mangaToDisplay =
  mangaList?.filter(manga => manga.title.toLowerCase().includes(mangaSearchTerm.toLowerCase()))
  const handleRecommend = () => {
    setShowRecommendations(showRecommendations => !showRecommendations)
   }
  return (
   <div>
     {/* <Header
      animeList={animeList}
      setAnimeList={setAnimeList}/> */}
     <aside className='sidebar-parent'>
      <aside className='sidebar-child'>
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
          <AnimeList
          animeList={animeToDisplay}
          isOpen={isOpen}
          setIsOpen={setIsOpen}/>
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
        <div className='button-div'>
        <button className = "footer-btn"
            onClick ={handleRecommend}> Recommendations
               </button>
            {showRecommendations ?
            <Footer
            handlRecommend={handleRecommend}
            recommendations={recommendations}
            setRecommendations={setRecommendations}
            /> : null}
        </div>
     </div>
   </div>
  )
}
export default AnimePage;