import {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header"; 
import ResourceForm from "./components/ResourceForm";
import ResourceList from "./components/ResourceList";


function App() {

  const [resources, setResources] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/resources")
      .then(response => response.json())
      .then(resourceData => {
        setResources(resourceData);
      });
  }, []);
  
  function handleToggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  function handleAddResource(newResource) {
  const updatedResources = [...resources, newResource];
  setResources(updatedResources)
  }

  return (
    <div className={isDarkMode ? "App" : "App light"} >
      <Header 
      onToggleDarkMode={handleToggleDarkMode} 
      isDarkMode={isDarkMode} 
      title="Resourceful" 
      /> 
      <ResourceList resources={resources} />
      <ResourceForm onAddResource={handleAddResource} />
    </div>
  );
}

export default App;
