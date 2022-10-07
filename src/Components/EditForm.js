import React, { useState, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
function EditForm() {
    let { id } = useParams();
    const [newItem, setNewItem] = useState({
      title: "",
      bookmark: "",
      website: "",
      image: "",
      anime: false,
      manga: false
   })
    useEffect(() => {
      fetch(`http://localhost:3000/item/${id}`)
      .then((res) => res.json())
      .then(data => setNewItem(data)
       )
    },[])
  const navigate = useNavigate();
    //const history = useHistory();
    function handleChange(e) {
        console.log(e.target)
        console.log(e.target.type)
        console.log(e.target.name)
        const value = e.target.type === "radio" ? e.target.checked : e.target.value
        const key = e.target.type === "radio" ? e.target.id : e.target.name
        console.log(key, value)
        setNewItem({
          ...newItem,
          [key]: value
        })
       }
  function handleSubmit(e){
    e.preventDefault()
    if(newItem.title === "" ||newItem.bookmark === "" || newItem.image === ""
    ){
      return alert("No fields can be blank, excpet viewing source")
    }
    fetch(`http://localhost:3000/item/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newItem)
  })
  navigate("/")
  //window.location.reload();
  }
    return (
    <form> edit manga
      <form className="new-poem-form">
        <input
        placeholder="Title"
        name="title"
        value={newItem.title}
        onChange={handleChange}
        />
        <input
        placeholder="Chapter/Episode"
        name="bookmark"
        value={newItem.bookmark}
        onChange={handleChange}
        />
        <input
        placeholder="Veiwing Source"
        name="website"
        value={newItem.website}
        onChange={handleChange}
        />
        <input
        placeholder="Img Url"
        name="image"
        value={newItem.image}
        onChange={handleChange}
        />
        <br />
        <input type="radio"
        checked={newItem.manga}
        value={newItem.manga}
        id="manga"
        onChange={handleChange} name="type" />
        <label for="manga">Manga</label>
        <input type="radio"
        value={newItem.anime}
        id="anime"
        checked={newItem.anime}
        onChange={handleChange} name="type" />
        <label for="anime">Anime</label>
        <br />
        <button
        onClick={handleSubmit}>Submit</button>
        </form>
    </form>
  )
}
export default EditForm