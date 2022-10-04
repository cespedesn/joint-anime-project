import React, { useState } from 'react'

import Form from './Form'
 function Header({ animeList, setAnimeList }) {
  const [hideForm, setHideFrom] = useState(false);
  const handleHide = () => {
    setHideFrom(hideFrom => !hideForm);
  }
  return (
    <div className='header'>
      <header>
      <button className = "show-btn" onClick={handleHide}>Show Manga/ Anime Form</button>
        {hideForm ?
        <Form
        animeList={animeList}
        setAnimeList={setAnimeList}
        hideForm={hideForm}
        /> : null}
      </header>
    </div>
  )
}
export default Header;