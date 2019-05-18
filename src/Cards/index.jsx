import React, { PureComponent } from 'react';
import logo from '../assets/img/pokemon.jpeg'

import './index.css'

class CardFilm extends PureComponent {
  render() {
    return (
      <div className="CardFilm">
        {/* {(this.props.state.name || this.props.state.date || this.props.state.time || this.props.state.hall) && } */}
        {this.props.state.film.map((film) => 
          <div className="card">
            <table>
              <tbody align="top">
                <tr>
                  <td className="img"><img src={logo} className="App-logo" alt="logo" /></td>
                  <tr><td className="name" value={film.name}>{film.name}</td></tr>
                  <tr>
                    {film.date.map((date) =>
                      <td value={date}>{date}</td>
                    )} 
                  </tr>
                  {film.hall.map((hall) => 
                    <tr>
                      <td>{hall.name}</td>
                      {hall.time.map((time =>
                        <td className="time" value={time}>{time}</td>
                      ))}
                    </tr>
                  )}
                </tr>
              </tbody>
            </table> 
          </div>
        )}
      </div>
    );
  }
}

export default CardFilm;
