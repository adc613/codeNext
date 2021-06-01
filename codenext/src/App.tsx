import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router> 
      
        <Switch>
          <Route path="/banana">
            <p>Banana</p>
          </Route>
          <Route path="/">
            <Mayoman firstName="Someone" lastName="Someone" numberOfEyes={2} numberOfHands={2}>

            </Mayoman>
            <Link to="/banana">Go to banana</Link>
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;

interface myMayomanProps {
  firstName: string;
  lastName: string;
  numberOfEyes: number;
  numberOfHands: number;
  
}

interface myMayomanState {
  numberOfLikes: number; 
}

class Mayoman extends React.Component<myMayomanProps, myMayomanState> {
  constructor(props:myMayomanProps) {
    super(props);
    this.state = {numberOfLikes: 5}
  }

  addTheLike() {
    this.setState({numberOfLikes : this.state.numberOfLikes + 1})
  }

  render() {
    return(
      <div>
        <p>Is it a bird? Is it a plane? No, it's Adam, the Mayoman Mayoman!!</p>

        <p>His first name is {this.props.firstName} and his last name is {this.props.lastName}.</p>
        
        <p>I have {this.props.numberOfEyes} eyes and {this.props.numberOfHands} hands.</p>
        <p>This image has {this.state.numberOfLikes} likes.</p>

        <button onClick={() => this.addTheLike()}>Like</button>

        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1500&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F02%2F90-day.jpg" />
      </div>
    )
  }
}

