import React, { useState } from 'react';

function ResourceItem({ resource }) {

  const { title, about, subject, link, image } = resource;
  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1)
  }
    
    return (
      <li className="card">
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="details">
          <h4>{title}</h4>
          {about && <p>{about}</p>}
          {link ? (
            <p>
              <a href={link}>Link</a>
            </p>
          ) : null} 
        </div>
        <div className="extra">
          <span className="badge blue">{subject}</span>
          <button onClick={handleLikes} className="likes">
            👍{likes}
          </button>
        </div>
      </li>
  );
}

export default ResourceItem;
