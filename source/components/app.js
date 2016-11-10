import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: []
    }
  }

  componentDidMount() {
    const weather = JSON.parse(localStorage.getItem('storedWeather'));
    this.setState({ storedWeather: weather ? weather : [] });
  }

  storeWeather() {
    this.state.location.push();
    let weather = this.state.location;
    this.setState({location: location}, () => this.pageStore())
  }

  pageStore() {
    localStorage.setItem('storedWeather', JSON.stringify(this.state.location))
  }

  render() {
    return (
      <div className="header">
        <h1 className = "welcome">Welcome To Weathry</h1>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
        <input className="user-location" placeholder="Location" onChange={(e) => this.setState({location: e.target.value})}/>
        <button className="submit-button" type="submit" onClick={(e) => this.getWeatherLocation(e)}>Submit</button>
      </div>
    )
  }
}

// class Weather extends React.Component {
//   constructor() {
//     super();
//
//   }
// }


ReactDOM.render(<Main title='Weathry'/>, document.getElementById('application'));
