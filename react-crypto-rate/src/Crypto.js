import React from 'react';
import axios from 'axios';
import CryptoList from './CryptoList.js';
import './App.css';

class Crypto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      cryptoList: []
    };
  }

  fetchData = () => {
    axios.get('https://blockchain.info/pl/ticker')
      .then(response => {

        let cryptoList = [];
        let oldCryptoList = this.state.cryptoList;

        for (let key in response.data) {
          let obj = {
            currency: key,
            last: response.data[key].last,
            symbol: response.data[key].symbol
          }

          let oldRate = oldCryptoList.find(oldRate => oldRate.currency === obj.currency);

          if (oldRate !== undefined) {
            if (obj.last > oldRate.last) {
              obj.class = 'green';
              obj.arrow = String.fromCharCode(8593);
            } else if (obj.last < oldRate.last) {
              obj.class = 'red';
              obj.arrow = String.fromCharCode(8595);
            } else if (obj.last === oldRate.last) {
              obj.class = 'blue';
              obj.arrow = String.fromCharCode(8596);
            } else {
              obj.class = 'blue';
            }
          }

          cryptoList.push(obj)
          // let resultFin = Object.entries(obj);
          // console.log(myArray);
        }
        this.setState({ cryptoList })
      });
  }

  componentDidMount() {
    this.fetchData();
    setInterval(() => {
      if (this.inputValue.value === ''){
        this.fetchData();
      }
    }, 5000);
  }

  onFilter = () => {
    let filter = this.inputValue.value = this.inputValue.value.trim().toUpperCase();
    let filterCryptoList = this.state.cryptoList;

    filterCryptoList = filterCryptoList.filter(rate => {return rate.currency.includes(filter);
    });

    this.setState({cryptoList: filterCryptoList});
  }

  render() {
    return (

      <div className="user-list-header">
          <input
            className="bit-coin-input"
            type="text"
            placeholder="Filter"
            ref={input => this.inputValue = input}
            onChange={this.onFilter}/>

          <CryptoList
            cryptoList={this.state.cryptoList}
          />
      </div>

    )
  }
}
export default Crypto;