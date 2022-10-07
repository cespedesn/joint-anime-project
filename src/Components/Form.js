import React, {useState} from 'react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
 function Form() {
  const navigate = useNavigate();
  const [newItem, setNewItem] = useState({
      title: "",
      bookmark: "",
      website: "",
      image: "",
      anime: false,
      manga: false
   })
   function handleChange(e) {
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
    if(newItem.title === "" || newItem.website === "" ||
    newItem.bookmark === "" || newItem.image === ""
    ){
      return alert("No fields can be blank")
    }
    fetch("http://localhost:3000/item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newItem)
  })
   navigate("/")
  }
  return (
      <div className="form">
        <form onSubmit={handleSubmit} className="form-form">
        <input
        placeholder="Title"
        name="title"
        value={newItem.title}
        onChange={handleChange}
        className="form-form"
        />
        <input
        placeholder="Chapter/Episode"
        name="bookmark"
        value={newItem.bookmark}
        onChange={handleChange}
        className="form-form"
        />
        <input
        placeholder="Viewing Source"
        name="website"
        value={newItem.website}
        onChange={handleChange}
        className="form-form"
        />
        <input
        placeholder="Img Url"
        name="image"
        value={newItem.image}
        onChange={handleChange}
        className="form-form"
        />
        <br />
        <input type="radio"
        checked={newItem.manga}
        value={newItem.manga}
        className="form-form"
        id="manga"
        onChange={handleChange} name="type" />
        <label for="manga">Manga</label>
        <input type="radio"
        value={newItem.anime}
        className="form-form"
        id="anime"
        checked={newItem.anime}
        onChange={handleChange} name="type" />
        <label for="anime">Anime</label>
        <br />
        <input
        className='form-btn'
        type="submit"
        />
        </form>
      </div>
      
  )
}
export default Form;