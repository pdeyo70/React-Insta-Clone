import React from 'react'
import SearchBar from './../SearchBar/SearchBar'
import PostContainer from './../PostContainer/PostContainer'

const PostsPage = (props) => {
    return(<div>
        <SearchBar 
          searchTerm={this.props.searchTerm}
          searchPosts={this.props.searchHandler} />
        <PostContainer posts={this.props.filteredPosts.length > 0
            ? this.props.filteredPosts
            : this.props.state.posts
          }
        />
        </div>)
}


export default PostsPage