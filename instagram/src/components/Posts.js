import React, {Component} from 'react';
import Post from './Post'

export default class Posts extends Component {
  render() {
    return(
      <div className="left">
        <Post alt="Nature" src="http://images.france.fr/zeaejvyq9bhj/4VGVbWT4kwsIyqaIuyiYs2/69b40a00fddb2b2c26ebd472fa6e4186/nature_dordogne.jpg?w=1200&h=630&q=70&fl=progressive&fit=fill" />
        <Post alt="Nature" src="https://www.visitportugal.com/sites/www.visitportugal.com/files/mediateca/23_660x371.jpg" />
      </div>
    )
  }
}