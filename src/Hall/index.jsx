import React, { Component } from 'react';

import './index.css';

class Hall extends Component {
  render() {
    return (
      <div className="containerHall">
        <div className="hall">
          <div className="screen">Экран</div>
            <div className="row">
            {this.props.seats.map((plan, index) => 
              <button 
                key={index}
                id={this.props.id}
                className={plan.booked ? 'close' : 'open'}
                onClick={this.props.handleChange.bind(this, index)}
                value={plan.seat} >
                {plan.seat}
              </button>
            )}
          </div>
        </div>
        <div className="info">
          <table>
            <tbody>
              <tr>
                <th className="close"></th>
                <th>-место занято</th>
              </tr>
              <tr>
                <th className="open"></th>
                <th>-место свободно</th>
              </tr>
              <tr>
                <th className="vip"></th>
                <th>-VIP место</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Hall;
