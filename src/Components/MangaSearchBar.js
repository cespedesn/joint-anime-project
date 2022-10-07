import React from 'react'

function MangaSearchBar({setMangaList, mangaSearchTerm, setMangaSearchTerm}) {
 
    function handleMangaSearchSubmit(e) {
        e.preventDefault();
        fetch(`https://api.jikan.moe/v4/manga?q=${mangaSearchTerm}`)
        .then(res => res.json())
        .then(data => {
          setMangaList(data.data)

        })
      }

      function handleMangaSearchChange (e) {
        setMangaSearchTerm(e.target.value); 
      } 


  return (
    <div>
      <form onSubmit={handleMangaSearchSubmit}>
      <input 
      
      onChange={handleMangaSearchChange}
      className='searchbar'
        type="text"
        placeholder="Search Manga..."
        value={mangaSearchTerm}
      />
      </form>
    </div>
  )
}
export default MangaSearchBar;