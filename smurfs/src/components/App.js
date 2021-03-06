import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurf, addSmurf, deleteSmurf, updateSmurf } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  }
  
  componentDidMount(){
    this.props.fetchSmurf();
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state)
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  deleteSmurf = id => {
    this.props.deleteSmurf(id)
  }

  updateSmurf = id => {
    this.props.updateSmurf(id);
  }
  

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <form onSubmit={this.addSmurf}>
          <input onChange={this.handleChanges} placeholder="Enter Smurf Name" name="name" value={this.state.name} />
          <input onChange={this.handleChanges} placeholder="Enter Smurf Age" name="age" value={this.state.age} />
          <input onChange={this.handleChanges} placeholder="Enter Smurf Height" name="height" value={this.state.height} />
          <button>Submit</button>
        </form>
        {this.props.smurfs.map(smurf => {
          return <div key={smurf.id}>
            <h3>{smurf.name}</h3>
            <h5>{smurf.age}</h5>
            <h5>{smurf.height}</h5>
            <button onClick={() => this.deleteSmurf(smurf.id)}>Delete</button>
            <button onClick={() => {
              if(this.props.isUpdating){
                return (
                  <div>
                    <input onChange={this.handleChanges} name="name" value={smurf.name} />
                    <input onChange={this.handleChanges} name="age" value={smurf.age} />
                    <input onChange={this.handleChanges} name="height" value={smurf.height} />
                  </div>
                )
              }
            }}>Update</button>
          </div>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  isUpdating: state.updateSmurf
})


export default connect(mapStateToProps, { fetchSmurf, addSmurf, deleteSmurf, updateSmurf })(App);
