import React, {PureComponent} from 'react';

import Filter from '../Filter';
import CardsFilms from '../Cards'

import Pokemon from '../assets/img/pokemon.jpg'
import Avengers from '../assets/img/avengers.jpg'


import './index.css';

export default class EventListNew extends PureComponent {
  constructor() {
		super();
    this.state = { 
      films: [
        {
          id: 1,
          logo: Pokemon,
          name: 'Детектив пикачу',
          date: 'Пятница',
          hall: 'Красный',
          time: '10:30',
          seats: [
            { seat: 1, row: 1, price: 100, booked: false, close: false },
            { seat: 2, row: 1, price: 100, booked: false, close: false },
            { seat: 3, row: 1, price: 100, booked: false, close: false },
            { seat: 4, row: 1, price: 100, booked: false, close: false },
            { seat: 5, row: 1, price: 100, booked: false, close: false },
            { seat: 6, row: 1, price: 100, booked: false, close: false },
            { seat: 7, row: 1, price: 100, booked: false, close: false },
            { seat: 8, row: 1, price: 100, booked: false, close: false },
            { seat: 9, row: 1, price: 100, booked: false, close: false },
            { seat: 10, row: 1, price: 100, booked: false, close: false},
            { seat: 11, row: 1, price: 100, booked: false, close: false },
            { seat: 12, row: 1, price: 100, booked: false, close: false },

            { seat: 1, row: 2, price: 100, booked: false, close: false },
            { seat: 2, row: 2, price: 100, booked: false, close: false },
            { seat: 3, row: 2, price: 100, booked: false, close: false },
            { seat: 4, row: 2, price: 100, booked: false, close: false },
            { seat: 5, row: 2, price: 100, booked: false, close: false },
            { seat: 6, row: 2, price: 100, booked: false, close: false },
            { seat: 7, row: 2, price: 100, booked: false, close: false },
            { seat: 8, row: 2, price: 100, booked: false, close: false },
            { seat: 9, row: 2, price: 100, booked: false, close: false },
            { seat: 10, row: 2, price: 100, booked: false, close: false },
            { seat: 11, row: 2, price: 100, booked: false, close: false },
            { seat: 12, row: 2, price: 100, booked: false, close: false },

            { seat: 1, row: 3, price: 100, booked: false, close: false },
            { seat: 2, row: 3, price: 100, booked: false, close: false },
            { seat: 3, row: 3, price: 100, booked: false, close: false },
            { seat: 4, row: 3, price: 100, booked: false, close: false },
            { seat: 5, row: 3, price: 100, booked: false, close: false },
            { seat: 6, row: 3, price: 100, booked: false, close: false },
            { seat: 7, row: 3, price: 100, booked: false, close: false },
            { seat: 8, row: 3, price: 100, booked: false, close: false },
            { seat: 9, row: 3, price: 100, booked: false, close: false },
            { seat: 10, row: 3, price: 100, booked: false, close: false },
            { seat: 11, row: 3, price: 100, booked: false, close: false },
            { seat: 12, row: 3, price: 100, booked: false, close: false },
          ]
        },
        {
          id: 2,
          logo: Avengers,
          name: 'Мстители: Финал',
          date: 'Суббота',
          hall: 'Белый',
          time: '12:30',
          seats: [
            { seat: 1, row: 1, price: 100, booked: false, close: false },
            { seat: 2, row: 1, price: 100, booked: false, close: false },
            { seat: 3, row: 1, price: 100, booked: false, close: false },
            { seat: 4, row: 1, price: 100, booked: false, close: false },
            { seat: 5, row: 1, price: 100, booked: false, close: false },
            { seat: 6, row: 1, price: 100, booked: false, close: false },
            { seat: 7, row: 1, price: 100, booked: false, close: false },
            { seat: 8, row: 1, price: 100, booked: false, close: false },
            { seat: 9, row: 1, price: 100, booked: false, close: false },
            { seat: 10, row: 1, price: 100, booked: false, close: false},
            { seat: 11, row: 1, price: 100, booked: false, close: false },
            { seat: 12, row: 1, price: 100, booked: false, close: false },

            { seat: 1, row: 2, price: 100, booked: false, close: false },
            { seat: 2, row: 2, price: 100, booked: false, close: false },
            { seat: 3, row: 2, price: 100, booked: false, close: false },
            { seat: 4, row: 2, price: 100, booked: false, close: false },
            { seat: 5, row: 2, price: 100, booked: false, close: false },
            { seat: 6, row: 2, price: 100, booked: false, close: false },
            { seat: 7, row: 2, price: 100, booked: false, close: false },
            { seat: 8, row: 2, price: 100, booked: false, close: false },
            { seat: 9, row: 2, price: 100, booked: false, close: false },
            { seat: 10, row: 2, price: 100, booked: false, close: false },
            { seat: 11, row: 2, price: 100, booked: false, close: false },
            { seat: 12, row: 2, price: 100, booked: false, close: false },

            { seat: 1, row: 3, price: 100, booked: false, close: false },
            { seat: 2, row: 3, price: 100, booked: false, close: false },
            { seat: 3, row: 3, price: 100, booked: false, close: false },
            { seat: 4, row: 3, price: 100, booked: false, close: false },
            { seat: 5, row: 3, price: 100, booked: false, close: false },
            { seat: 6, row: 3, price: 100, booked: false, close: false },
            { seat: 7, row: 3, price: 100, booked: false, close: false },
            { seat: 8, row: 3, price: 100, booked: false, close: false },
            { seat: 9, row: 3, price: 100, booked: false, close: false },
            { seat: 10, row: 3, price: 100, booked: false, close: false },
            { seat: 11, row: 3, price: 100, booked: false, close: false },
            { seat: 12, row: 3, price: 100, booked: false, close: false },
          ]
        }
      ],

      text: [],
      price: 0,
      name: '',
      date: '',
      hall: '',
      time: '',
    };
  }
  
  handleChange(index, e) {
      let id = e.target.id;
      let texts = 'Ряд: '+this.state.films[id-1].seats[index].row+', Место: '+this.state.films[id-1].seats[index].seat;
      let found = this.state.text.indexOf(texts);
      let prices = this.state.price;
      let count = this.state.price;
      let closePlase = this.state.films[id-1].seats[index].close;

      if(closePlase == true) {
        alert('Место забронировано, выберите другое!')
      } else {
        if(found > -1) {
          this.state.text.splice(found, 1);
          count = count - this.state.films[id-1].seats[index].price;
          this.setState({ price: count });
  
          this.state.films[id-1].seats[index].booked = false;
        } else {
          count = prices + this.state.films[id-1].seats[index].price;
          this.setState({ text: [...this.state.text, texts] });
          this.setState({ price: count });
  
          this.state.films[id-1].seats[index].booked = true;
        }
      }
  
      e.preventDefault();
    }

  handleChangeSelectName(e) {
    this.setState({ name: e.target.value })
    console.log(this.state.name);
  }

  handleChangeSelectDate(e) {
    this.setState({ date: e.target.value })
    console.log(this.state.date);
  }

  handleChangeSelectTime(e) {
    this.setState({ time: e.target.value })
    console.log(this.state.time);
  }

  handleChangeSelectHall(e) {
    this.setState({ hall: e.target.value })
    console.log(this.state.hall);
  }

  buy() {
    alert('Былиты забронированы на сумму: '+this.state.price+' грн.');

    this.state.films.map((films) => 
      films.seats.map((film) => 
        film.booked == true ? film.close = true : null
      )
    )
    
    this.setState({ 
      price: 0,
      text: []
    })
  }

  methoddd() {
      var title = document.getElementsByClassName('acardion-title'),
      cont = document.getElementsByClassName('acardion-cont');
    
    for(var i = 0; i < title.length; i++) {
      title[i].addEventListener('click', function() {
        if(!(this.classList.contains('active'))) {
          for(var i = 0; i < title.length; i++) {
            title[i].classList.remove('active');
          }
          this.classList.add('active');
        }
      })
    }
    
    
    
  }

  
  render() {
    return (
      <div className="Main">
        <Filter 
          state={this.state}
          methodBuy={this.buy.bind(this)} 
          handleChangeSelectName={this.handleChangeSelectName.bind(this)}
          handleChangeSelectDate={this.handleChangeSelectDate.bind(this)}
          handleChangeSelectTime={this.handleChangeSelectTime.bind(this)}
          handleChangeSelectHall={this.handleChangeSelectHall.bind(this)}
        />

        <div className="CardMain">
          {this.state.films.map((film) => (
            <CardsFilms 
              methoddd={this.methoddd.bind(this)}
              handleChange={this.handleChange.bind(this)}
              stateFilms={film}
            />
          ))}
        </div>        
      </div>
    );
  }
}


