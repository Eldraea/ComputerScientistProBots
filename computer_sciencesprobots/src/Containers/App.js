
import React from 'react';
import { connect } from 'react-redux/es/exports';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import {robots} from '../robots';
import './App.css';
import { setSearchField } from '../actions';
import ErrorBoundary from '../Components/ErrorBoundary';
import Scroll from '../Components/Scroll';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}
function App (props){
  const {searchField, onSearchChange} = props
  
  const filteredRobots =robots.filter(robot => {
        return robot.firstName.toLowerCase().includes(searchField.toLowerCase())
        ||robot.lastName.toLowerCase().includes(searchField.toLowerCase())
        ||robot.profession.toLowerCase().includes(searchField.toLowerCase());
  })
     
  return !robots.length
        ? <h1>Loading</h1>
        : (
          <div>
            <h1 className ='f1 tc'>Computer Sciences ProBots</h1>
            <SearchBox searchChange= {onSearchChange}/>
            <Scroll> 
              <ErrorBoundary>
                <CardList robots = {filteredRobots}/>
              </ErrorBoundary>
            </Scroll>
          </div>
        );
  }


export default connect(mapStateToProps, mapDispatchToProps)(App);
