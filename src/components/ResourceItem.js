import React, { useState } from 'react';
import { Link } from "react-router-dom";

function ResourceItem({ resource }) {

  const { id, title, about, subject, image } = resource;
  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1)
  }
    
    return (
      <li className="card">
        <div className="image">
          <img src={image} alt={title} />
          <button className="likes" onClick={handleLikes}>
            👍{likes}
          </button>
        </div>
        <div className="details">
          <h4>{title}</h4>
          <p>{about}</p>
          <p>
            <Link to={`/resource/${id}`}>View</Link>
          </p>
        </div>
        <div className="extra">
          <span className="badge blue">{subject}</span>
        </div>
      </li>
  );
}

export default ResourceItem;
