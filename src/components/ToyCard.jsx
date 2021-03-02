import React, { Component } from 'react';

class ToyCard extends Component {




handleClick = () => {
  console.log(this.props.toy)
  const toyId = this.props.toy.id
  this.props.deleteToy(toyId)
}

// updatedToy is argument for callback in App updatedLikes
handleLikes = () => {
 const updatedToy = {
   ...this.props.toy,
   likes: this.props.toy.likes + 1
 }
 this.props.updatedLikes(updatedToy)

 
}











  
  render() {
    // console.log(this.props)
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button onClick={this.handleLikes} className="like-btn">Like {'<3'}</button>
        <button onClick={this.handleClick} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
