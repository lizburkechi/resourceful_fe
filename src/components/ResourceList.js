import React, { useState } from "react";
import ResourceItem from "./ResourceItem";


function ResourceList({ resources }) {
  const [searchText, setSearchText] = useState("");

  const filteredResources = resources.filter((resource) => {
    return resource.title.toLowerCase().includes(searchText.toLowerCase());
   });

  const resourceItems = filteredResources.map((resource) => {
    return <ResourceItem key={resource.id} resource={resource} />;
  });

  function handleSearchInput(e) {
    setSearchText(e.target.value);
  }

  return (
    <section>
      <h2 className="subjects">Subjects</h2>

      <div className="filter">
        <button>All</button>
        <button>CSS</button>
        <button>Javascript</button>
        <button>React</button>
        <button>Redux</button>
        <button>Ruby</button>
        <button>Other</button>
      </div>
      <input onChange={handleSearchInput} type="text" placeholder="Search..." />

      <ul className="cards">{resourceItems}</ul>
    </section>
  );
}

export default ResourceList;