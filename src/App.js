import {useState} from 'react';
import './App.css';
import Header from "./components/Header"; 
import ResourceForm from "./components/ResourceForm";
import ResourceList from "./components/ResourceList";


function App() {

  const [resources, setResources] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  function handlefetchResources() {
    fetch("http://localhost:4000/resources")
    .then((r) => r.json())
    .then((resourceData) => {
      setResources(resourceData);
    });
  }
  
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
      <button onClick={handlefetchResources}>Show Resources</button>
      <ResourceList resources={resources} />
      <ResourceForm onAddResource={handleAddResource} />
    </div>
  );
}

export default App;
