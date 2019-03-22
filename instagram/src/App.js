import React, { Component } from 'react';
import './App.css';
import PostContainer from './Components/PostContainer/PostContainer'
import SearchBar from './Components/SearchBar/SearchBar'
import dummyData from './dummy-data'
import PostsPage from './Components/PostContainer/PostsPage'

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
filteredPosts = () => {
  this.props.filteredPosts.length > 0
  ? this.props.filteredPosts
  : this.props.state.posts }


  render() {
    let filtered = filteredPosts()
    return (
      
      <div className="App">
        <PostsPage posts={filtered}/>
      </div>)
    
  }

}

export default App;
