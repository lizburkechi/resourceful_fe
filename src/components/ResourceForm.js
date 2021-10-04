import React from "react";

function ResourceForm() {

  return (
    <section>
      <form className="form">
        <h3>Add Materials</h3>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="about">About</label>
        <textarea id="about" name="about" />
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" />
        <label htmlFor="link">Link</label>
        <input type="text" id="link" name="link" />
        <label htmlFor="image">Image URL</label>
        <input type="text" id="image" name="image" />
        <button type="submit">Add Resource</button>
      </form>
    </section>
  );
}

export default ResourceForm;