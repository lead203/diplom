import React, {PureComponent} from 'react';

import Filter from '../Filter';
import Hall from '../Hall';
import CardsFilms from '../Cards'


import './index.css';

export default class EventListNew extends PureComponent {
  constructor() {
		super();
    this.state = { 
      plan: [
        { seat: 1, row: 1, price: 101, booked: false },
        { seat: 2, row: 1, price: 102, booked: false },
        { seat: 3, row: 1, price: 103, booked: false },
        { seat: 4, row: 1, price: 104, booked: false },
        { seat: 5, row: 1, price: 105, booked: false },
        { seat: 6, row: 1, price: 100, booked: false },
        { seat: 7, row: 1, price: 100, booked: false },
        { seat: 8, row: 1, price: 100, booked: false },
        { seat: 9, row: 1, price: 100, booked: false },
        { seat: 10, row: 1, price: 100, booked: false },
        { seat: 11, row: 1, price: 100, booked: false },
        { seat: 12, row: 1, price: 100, booked: false },
        { seat: 1, row: 2, price: 100, booked: false },
        { seat: 2, row: 2, price: 100, booked: false },
        { seat: 3, row: 2, price: 100, booked: false },
        { seat: 4, row: 2, price: 100, booked: false },
        { seat: 5, row: 2, price: 100, booked: false },
        { seat: 6, row: 2, price: 100, booked: false },
        { seat: 7, row: 2, price: 100, booked: false },
        { seat: 8, row: 2, price: 100, booked: false },
        { seat: 9, row: 2, price: 100, booked: false },
        { seat: 10, row: 2, price: 100, booked: false },
        { seat: 11, row: 2, price: 100, booked: false },
        { seat: 12, row: 2, price: 100, booked: false },
        { seat: 1, row: 3, price: 100, booked: false },
        { seat: 2, row: 3, price: 100, booked: false },
        { seat: 3, row: 3, price: 100, booked: false },
        { seat: 4, row: 3, price: 100, booked: false },
        { seat: 5, row: 3, price: 100, booked: false },
        { seat: 6, row: 3, price: 100, booked: false },
        { seat: 7, row: 3, price: 100, booked: false },
        { seat: 8, row: 3, price: 100, booked: false },
        { seat: 9, row: 3, price: 100, booked: false },
        { seat: 10, row: 3, price: 100, booked: false },
        { seat: 11, row: 3, price: 100, booked: false },
        { seat: 12, row: 3, price: 100, booked: false },
      ],
      film: [
        {
          name: 'Покемоны',
          date: ['Пятница', 'Суббота', 'Воскресенье'],
          hall: [
            {name: 'Красныый', time: ['10:30', '12:15', '17:00']},
            {name: 'Белый', time: ['10:30', '12:15', '17:00']},
            {name: 'Желтый', time: ['10:30', '12:15', '17:00']}
          ],
        },
        {
          name: 'Покемоны2',
          date: ['Пятница', 'Суббота', 'Воскресенье'],
          hall: [
            {name: 'Красныый', time: ['10:30', '12:15', '17:00']},
            {name: 'Белый', time: ['10:30', '12:15', '17:00']},
            {name: 'Желтый', time: ['10:30', '12:15', '17:00']}
          ],
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
    console.log(this.state.plan[index].booked = !this.state.plan[index].booked);

    let texts = 'Ряд: '+this.state.plan[index].row+', Место: '+this.state.plan[index].seat;
    let found = this.state.text.indexOf(texts);

    let prices = this.state.price;
    let count = this.state.price;
    
    if(found > -1 ) {
      this.state.text.splice(found, 1);
      count = count - this.state.plan[index].price;
      this.setState({ price: count });
    } else {
      count = prices + this.state.plan[index].price;
      this.setState({ text: [...this.state.text, texts] });
      this.setState({ price: count });
    }

    this.setState({ booked: !this.state.plan[index].booked })
    e.preventDefault();
  }

  handleChangeSelectName(e) {
    this.setState({ name: e.target.value })
    console.log(this.state.film[0].name)
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

  buy(e) {
    alert('Былиты куплены на сумму: '+this.state.price);
    e.preventDefault();
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
        {/* <Hall state={this.state} handleChange={this.handleChange.bind(this)}/> */}
        <CardsFilms state={this.state}/>
      </div>
    );
  }
}
