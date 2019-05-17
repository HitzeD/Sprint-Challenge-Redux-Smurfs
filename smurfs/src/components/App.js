import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  
  componentDidMount(){
    console.log(this.props.fetchSmurf);
    this.props.fetchSmurf();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => {
          return <div key={smurf.id}>
            <h3>{smurf.name}</h3>
            <h5>{smurf.age}</h5>
            <h5>{smurf.height}</h5>
          </div>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
})


export default connect(mapStateToProps, { fetchSmurf })(App);
