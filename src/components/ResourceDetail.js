import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

export default function ResourceDetail() {
    const [likes, setLikes] = useState(0);
    const [resource, setResource] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const { id } = useParams();
    console.log(id);

        useEffect(() => {
          fetch(`http://localhost:4000/resources/${id}`)
          .then((r) => r.json())
          .then((resource) => {
              setResource(resource);
              setIsLoaded(true);
          });
        }, [id]);

        if (!isLoaded) return <h2>Loading...</h2>;

        const { title, about, subject, link, image } = resource;

        function handleLikes() {
            setLikes(likes + 1);
        }

    return (
        <section>
            <div className="resource-detail">
                <div className="resource-image">
                    <img src={image} alt={title} />
                    <button className="likes" onClick={handleLikes}>
                    👍{likes}
                    </button>
                </div>
                <div>
                    <p>{about}</p>
                    <p>{subject}</p>
                    <p>{link}</p>
                </div>
            </div>
        </section>
    )
}
