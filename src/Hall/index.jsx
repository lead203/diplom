import React, { Component } from 'react';

import './index.css';

class Hall extends Component {
  render() {
    return (
      <div className="containerHall">
        <div className="hall">
          <div className="screen">Экран</div>
          <div className="row">
            {this.props.state.plan.map((number, index) => 
              <button 
                key={index}
                className={number.booked ? 'close' : 'open'}
                onClick={this.props.handleChange.bind(this, index)}
                value={number.seat} >
                {number.seat}
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
                <th className="blue"></th>
                <th>-место свободно</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Hall;
