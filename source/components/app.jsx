import React from 'react';
import { LocationInput } from './LocationInput';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: [],
    };
  }

  setLocation(e) {
    this.setState({ location: e.target.value });
    console.log(e.target.value);
  }



  render() {
    return (
      <div className="header">
        <h1 className="welcome">Welcome To Weathry</h1>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
        <LocationInput location={this.state.location} pizza={this.setLocation.bind(this)} />
        <button className="submit-button" type="submit" onClick={(e) => this.getWeatherLocation(e)}>Submit</button>
      </div>
    );
  }
}
