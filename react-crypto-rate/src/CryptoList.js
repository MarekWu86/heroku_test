import React, { Component } from "react";
class CryptoList extends Component {
    render() {
        const lista = this.props.cryptoList;

        return (
            <ul> 
                {lista.map(currency =>
                <li key={currency.currency}>
                <span>Last rate:</span> &nbsp;&nbsp;
                <span className={currency.class}>{currency.last}&nbsp;{currency.arrow}</span>&nbsp;&nbsp;
                <strong>{currency.currency}</strong>
                [<span id="symbol-style">{currency.symbol}</span>]
                </li>
                )}
            </ul>
        );
    }
}
export default CryptoList;