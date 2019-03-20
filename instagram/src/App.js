import React, { Component } from 'react';
import './App.css';
import PostContainer from './Components/PostContainer/PostContainer'
import SearchBar from './Components/SearchBar/SearchBar'
import dummyData from './dummy-data';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      posts: [], //posts array placeholder
      filteredPosts: [] //SearchBar-filtered posts placeholder
    }
  }

  componentDidMount() { //lifecycle method, sets posts to all of dummyData
    this.setState({
      posts: dummyData,
    })
  }

//searchHandler takes argumemt and filters posts the search parameters
searchHandler = e => {
  const posts = this.state.posts.filter(p => {
    if (p.username.includes(e.target.value)){
      return p
    }
  })
  this.setState({ filteredPosts: posts})
}

const Authenticate = (App) => {
  class extends Component {
    state = {
      loggedIn: false,
    }

  render() {
    if (this.state.loggedIn === true){
    return (
      
      <div className="App">
        <SearchBar 
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchHandler} />
        <PostContainer posts={this.state.filteredPosts.length > 0
            ? this.state.filteredPosts
            : this.state.posts
          }
        />

      </div>})
      else return(
      <h1>Please Login</h1>
      )
    
  }

}
}


}

export default App;
