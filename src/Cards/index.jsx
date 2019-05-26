import React, { PureComponent } from 'react';
import Hall from '../Hall';


import './index.css'

class CardFilm extends PureComponent {
  render() {
    return (
      <div className="CardFilm" onClick={this.props.methoddd}>
        <div className="card">
          <div className="acardion-title">
          <table>
            <tbody align="top">
              <tr>
                <td className="img"><img src={this.props.stateFilms.logo} className="logo" alt="logo" /></td>
                <tr><td className="name" value={this.props.stateFilms.name}><span>{this.props.stateFilms.name}</span></td></tr>
                <tr><td value={this.props.stateFilms.date}>{this.props.stateFilms.date}</td></tr>
                <tr><td value={this.props.stateFilms.hall}>{this.props.stateFilms.hall}</td></tr>
                <tr><td className="time" value={this.props.stateFilms.time}>{this.props.stateFilms.time}</td></tr>
              </tr>
            </tbody>
          </table>
          </div>

          <div className="acardion-cont">
            <Hall 
              seats={this.props.stateFilms.seats} 
              handleChange={this.props.handleChange}
              id={this.props.stateFilms.id} />
          </div>        
        </div>
      </div>
    );
  }
}

export default CardFilm;
