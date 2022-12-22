import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    return (
    <div className="github-profile">
      <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600" />
      <div className="info">
        <div className="name">Name here...</div>
        <div className="company">Company here...</div>
      </div>
    </div>
    );
  }
}

export default Card;
