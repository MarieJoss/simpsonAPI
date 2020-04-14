import React from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

const sampleSimpsons = 
  {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  }


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simps: sampleSimpsons
    };
    this.getSimpsons = this.getSimpsons.bind(this);
  
}

  getSimpsons() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          simps: data[0],
        });
    });
  }

  render() {
    return (
      <div className="App">
        <QuoteCard simps={this.state.simps} />
        <button type="button" onClick={this.getSimpsons}>Get Simpsons</button>
      </div>
    );
  }
}

  export default App;
