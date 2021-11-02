import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ResourceForm({ onAddResource }) {

  const [title, setTitle] = useState("")
  const [about, setAbout] = useState("")
  const [subject, setSubject] = useState("")
  const [link, setLink] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)
  const history = useHistory();
  console.log(history);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      title: title,
      about: about,
      subject: subject,
      link: link,
      image: selectedImage,
      likes: 0,
    };

    fetch("http://localhost:3000/resources", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(newResource => {
        onAddResource(newResource);
        history.push(`/resource/${newResource.id}`)
      });
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <h3>Add Materials</h3>
        <label htmlFor="title">Title</label>
        <input 
        type="text" 
        id="title" 
        name="title"
        value={title}
        onChange={(e)=> setTitle(e.target.value)} 
        />
        <label htmlFor="about">About</label>
        <textarea 
        id="about" 
        name="about"
        value={about}
        onChange={(e) => setAbout(e.target.value)} 
        />
        <label htmlFor="subject">Subject</label>
        <select 
        type="text" 
        id="subject" 
        name="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)} 
        >
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
        <option value="Redux">Redux</option>
        <option value="Ruby">Ruby</option>
        <option value="Other">Other</option>
        </select>
        <label htmlFor="link">Link</label>
        <input 
        type="text" 
        id="link" 
        name="link"
        value={link}
        onChange={(e) => setLink(e.target.value)} 
        />
        <label htmlFor="image">Upload Image</label>
        <input 
        type="file" 
        id="image" 
        name="image"
        value={selectedImage}
        onChange={(e) => setSelectedImage(e.target.files[0])} 
        />
        <button type="submit">Add Resource</button>
      </form>
    </section>
  );
}

export default ResourceForm;