
import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import {robots} from '../robots';
import './App.css';
import Scroll from '../Components/Scroll';

class App extends React.Component{
  constructor()
  {
    super()
    this.state =
    {
      robots: robots,
      searchField: '',
    }
  }
  onSearchChange= (event) => {
    this.setState({searchField : event.target.value });
    
  }
  render()
  {
    const {robots, searchField} = this.state;
    const filteredRobots =robots.filter(robot => 
      {
        return robot.firstName.toLowerCase().includes(searchField.toLowerCase())
        ||robot.lastName.toLowerCase().includes(searchField.toLowerCase())
        ||robot.profession.toLowerCase().includes(searchField.toLowerCase());
      })
     
        return !robots.length
        ? <h1>Loading</h1>
        : (
          <div>
            <h1 className ='f1 tc'>Computer SciencesProBots</h1>
            <SearchBox searchChange= {this.onSearchChange}/>
            <Scroll> 
              <CardList robots = {filteredRobots}/>
            </Scroll>
          </div>
        );
  }
}

export default App;
