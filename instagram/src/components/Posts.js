import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservices';

export default class Posts extends Component {
  InstaService = new InstaService();
  state = {
    posts: [],
    error: false
  }

  componentDidMount() {
    this.updatePosts()
  }

  updatePosts() {
    this.InstaService.getAllPosts()
    .then(this.onPostsLoaded)
    .catch(this.onError);
  }

  onPostsLoaded = (posts) => {
    this.setState({
      posts,
      error: false
    })
  }

  onError = (error) => {
    this.setState({
      error: true
    })
  }

  renderItems(arr) {
    return arr.map(item => {
      const {name, altname, photo, scr, alt, descr, id} = item;

      return (
        <div className="post">
          <User
            src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
            alt="prince" 
            name="Harry"
            min
            />
          <img src={this.props.src} alt={this.props.alt}></img>
          <div className="post__name">
            some account
          </div>
          <div className="post__descr">
            hkg ahsfh asdfukasdfklhasdkjfahlsdf sdasds j dsdhf sffus sfa sdffisd d
          </div>
        </div>
      )
    })
  }

  render() {
    return(
      <div className="left">
        <Post alt="Nature" src="http://images.france.fr/zeaejvyq9bhj/4VGVbWT4kwsIyqaIuyiYs2/69b40a00fddb2b2c26ebd472fa6e4186/nature_dordogne.jpg?w=1200&h=630&q=70&fl=progressive&fit=fill" />
        <Post alt="Nature" src="https://www.visitportugal.com/sites/www.visitportugal.com/files/mediateca/23_660x371.jpg" />
      </div>
    )
  }
}