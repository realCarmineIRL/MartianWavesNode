import React, { Component } from "react";
// import MarketCapData from './resources/marketCap.json'
import axios from 'axios';
 
class MarketCap extends Component {
        state = {
          coins: []
        }
      
        componentDidMount() {
          axios.get('https://api.coincap.io/v2/assets/waves')
            .then(res => {
              const coins = res.data.data;
              this.setState({ coins });
            })
        }
      
        render() {
            const coins = this.state.coins
            return (
                <div className="content1">
                <h2>{coins.name}: ${coins.priceUsd}</h2>
                </div>
            )
        }    
//   render() {
//     return (
        // <div className="content1">
        //     {MarketCapData.map((marketDetail, index) => {
        //         return <div>
        //             <h2>{marketDetail.name.toUpperCase()}: ${marketDetail.price}</h2>
        //         </div>
        //     })}
        // </div>
//     );
//   }
}
 
export default MarketCap;