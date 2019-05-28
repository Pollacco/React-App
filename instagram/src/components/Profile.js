import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
  return(
    <div className="container profile">
      <User
        src="https://static.boredpanda.com/blog/wp-content/uploads/2017/11/My-most-popular-pic-since-I-started-dog-photography-5a0b38cbd5e1e__880.jpg"
        alt="picture"
        name="some_name"/>
      <Palette/>
    </div>
  )
}

export default Profile;