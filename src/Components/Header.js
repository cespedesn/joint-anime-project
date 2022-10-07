import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Header() {
  const [hideForm, setHideFrom] = useState(false);
  const handleHide = () => {
    setHideFrom(hideFrom => !hideForm);
  }
  return (
    <div className='header'>
      <header>
      {/* <button className = "show-btn" onClick={handleHide}>Show Manga/ Anime Form</button>
        {hideForm ?
        <Form
        itemList={itemList}
        setItemList={setItemList}
        animeList={animeList}
        setAnimeList={setAnimeList}
        hideForm={hideForm}
        /> : null}
         */}
         <Link to="/new">Submit New Manga/Anime</Link>
         <br />
         <Link to="/">Home</Link>
         <br />
         <Link to= "/bookmark">Bookmark</Link>
        
      </header>
    </div>
  )
}
export default Header;























// import React, { useState } from 'react'

// import Form from './Form'
//  function Header({ animeList, setAnimeList }) {
//   const [hideForm, setHideFrom] = useState(false);
//   const handleHide = () => {
//     setHideFrom(hideFrom => !hideForm);
//   }
//   return (
//     <div className='header'>
//       <header>
//       <button className = "show-btn" 
//       onClick={handleHide}>Show Manga/ Anime Form</button>
//         {hideForm ?
//         <Form
//         animeList={animeList}
//         setAnimeList={setAnimeList}
//         hideForm={hideForm}
//         /> : null}
//       </header>
//     </div>
//   )
// }
// export default Header;
    