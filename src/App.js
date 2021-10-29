import {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from "./components/Header"; 
import ResourceForm from "./components/ResourceForm";
import ResourceList from "./components/ResourceList";
import Home from './components/Home';
import ResourceDetail from './components/ResourceDetail';


function App() {

  const [resources, setResources] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/resources")
      .then(response => response.json())
      .then(setResources);
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
      isDarkMode={isDarkMode}
      onToggleDarkMode={handleToggleDarkMode} 
      title="Resourceful" 
      /> 
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/resource-list" >
        <ResourceList resources={resources} />
      </Route>
      <Route exact path="/resource-form" >
        <ResourceForm onAddResource={handleAddResource} />
      </Route>
      <Route exact path="/resource/:id">
        <ResourceDetail />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
