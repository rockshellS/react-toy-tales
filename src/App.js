import React from 'react';
import './App.css';
import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'
class App extends React.Component{
  constructor() {
    super()
      //setting the initial state of the toys array to an empty array to be changed
    //by componentDidMount below using this.setState({})
    this.state = {
      toys: [],
      display: false
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(toysArr => {
      this.setState({
        toys: toysArr
      })
    })
  }
  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addNewToy = (newToy) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newToy)
  };

    fetch('http://localhost:3000/toys', requestOptions)
    .then(resp => resp.json())
    .then(newToy => 
      this.setState({
          toys: [...this.state.toys, newToy] 
      })
    )

    }
    
    deleteToy = (toyId) => {
      // console.log('app/deleteBtn', toyId) can do this after the handleClick is made
      fetch(`http://localhost:3000/toys/${toyId}`, {method: 'DELETE'})
        const updatedToys = this.state.toys.filter(eachToy => toyId !== eachToy.id)
        this.setState({
          toys: updatedToys
        })
      }
      
    
    updateLikes = (updatedToy) => {
      //
        const requestOptions = {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedToy)
      };
      
        fetch(`http://localhost:3000/toys/${updatedToy.id}`, requestOptions)
        .then(resp => resp.json())
          //.then(toy => console.log(toy))
          .then(updatedLikes => {
            const updatedToyArr = this.state.toys.map(eachToy => {
              if (eachToy.id === updatedLikes.id) {
                return updatedLikes
              }else {
                return eachToy
              }
            })
            this.setState({
              toys: updatedToyArr
            })
          })
        
    }
    
  



  render(){
    // console.log('app/render', this.state.toys)
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addNewToy={this.addNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} deleteToy={this.deleteToy} updatedLikes={this.updateLikes}/>
      </>
    );
  }
}

export default App;