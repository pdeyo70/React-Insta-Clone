import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './Components/PostContainer/PostContainer'
import SearchBar from './Components/SearchBar/SearchBar'
import CommentSection from './Components/CommentSection/CommentSection' 
import dummyData from './dummy-data';





class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer />
        <CommentSection />
      </div>
    );
  }
}

export default App;
