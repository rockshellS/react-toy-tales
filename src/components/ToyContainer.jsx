import React, { Component } from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends Component {

  renderAllToys = () => {
    return this.props.toys.map(toy => {
      return <ToyCard toy={toy} key={toy.id} deleteToy={this.props.deleteToy} updatedLikes={this.props.updatedLikes}/>
    })
  }
  
  
  
  
  
  render(){
    // console.log(this.props)
    return(
      <div id="toy-collection">
       {this.renderAllToys()}

      </div>
    );
  }


  }


export default ToyContainer;
