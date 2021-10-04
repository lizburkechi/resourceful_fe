import {useState} from 'react';
import './App.css';
import Header from "./components/Header"; 
import ResourceForm from "./components/ResourceForm"
import ResourceList from "./components/ResourceList"


// import resources from "./data";


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
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? "App" : "App Light"} >
      <Header 
      onToggleDarkMode={handleToggleDarkMode} 
      isDarkMode={isDarkMode} 
      title="Resourceful" 
      />
      <ResourceForm />
      <button onClick={handlefetchResources}>Show Resources</button>
      <ResourceList resources={resources} />
    </div>
  );
}

export default App;
