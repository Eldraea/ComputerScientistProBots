
import React, {useState} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import {robots} from '../robots';
import './App.css';
import ErrorBoundary from '../Components/ErrorBoundary';
import Scroll from '../Components/Scroll';

function App (){
  
  const[searchField, setSearchField] = useState('')

  const onSearchChange= (event) => {
    setSearchField(event.target.value );  
  }
  
  const filteredRobots =robots.filter(robot => {
        return robot.firstName.toLowerCase().includes(searchField.toLowerCase())
        ||robot.lastName.toLowerCase().includes(searchField.toLowerCase())
        ||robot.profession.toLowerCase().includes(searchField.toLowerCase());
  })
     
  return !robots.length
        ? <h1>Loading</h1>
        : (
          <div>
            <h1 className ='f1 tc'>Computer SciencesProBots</h1>
            <SearchBox searchChange= {onSearchChange}/>
            <Scroll> 
              <ErrorBoundary>
                <CardList robots = {filteredRobots}/>
              </ErrorBoundary>
            </Scroll>
          </div>
        );
  }


export default App;
