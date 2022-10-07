import React from "react";
import AnimePage from "./AnimePage";
import Header from'./Header'
import { Routes, Route } from "react-router-dom"
import Form from './Form'
import EditForm from './EditForm'
import Bookmark from "./Bookmark";
//import { FaBeer } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
         <Header />
      <Routes>
      <Route path="/" element={<AnimePage />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="new" element={<Form />} />
      <Route path="/edit/:id" element={<EditForm />} />
      </Routes>
    </div>
  );
}
export default App;