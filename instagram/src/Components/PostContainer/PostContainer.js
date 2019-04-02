import React from 'react'
import Post from './Post'
import './PostContainer.css'
import PropTypes from 'prop-types'

const PostContainer = (props) => {
        return(
                <div className="posts-containter-wrapper">                
                        {props.posts.map(post => <Post  key={post.imageUrl} post={post} />)}
                </div>
        );

        
}

        PostContainer.propTypes = {
                comments: PropTypes.array,
                imageUrl: PropTypes.string,     
                likes: PropTypes.number
        }

export default PostContainer;