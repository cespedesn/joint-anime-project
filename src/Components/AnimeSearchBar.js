import React from 'react'

function AnimeSearchBar({setAnimeList, searchTerm, setSearchTerm}) {



  function handleSearchSubmit(e) {
    e.preventDefault();
    fetch(`https://api.jikan.moe/v4/anime?q=${searchTerm}`)
    .then(res => res.json())
    .then(data => {
      setAnimeList(data.data)
      
    })
  }

  function handleAnimeSearchChange (e) {
    setSearchTerm(e.target.value); 
  }
    
  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
      <input 
      
      onChange={handleAnimeSearchChange}
      className='searchbar'
        type="text"
        placeholder="Search Anime..."
        value={searchTerm}
      />
      </form>
    </div>
  )
  }
export default AnimeSearchBar