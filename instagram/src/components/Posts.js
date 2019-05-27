import React, {Component} from 'react';
import Post from './Post'

export default class Posts extends Component {
  render() {
    return(
      <div className="left">
        <Post alt="Nature" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFn0ZI5qRDQd8sBkN4CCVVnwk5z_tvtwX5jm0bfCs6J7BJnq-Y4Q" />
      </div>
    )
  }
}