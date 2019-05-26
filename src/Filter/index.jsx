import React, {PureComponent} from 'react';

import './index.css'

class Filter extends PureComponent {
  render() {
    return (
      <div className="containerFilter">
        <div className="filter">
          <div>
            <p>Фильм</p>
            <select value={this.props.state.name} onChange={this.props.handleChangeSelectName.bind(this)}>
              <option>-Выберите фильм-</option>
              <option>Покемоны</option>
              <option>Покемоны2</option>
            </select>
          </div>
          <div>
            <p>День</p>
            <select value={this.props.state.date} onChange={this.props.handleChangeSelectDate.bind(this)}>
              <option>-Выберите день-</option>
              <option>Понедельник</option>
              <option>Вторник</option>
              <option>Среда</option>
              <option>Четверг</option>
              <option value="Пятница">Пятница</option>
              <option value="Суббота">Суббота</option>
              <option value="Воскресенье">Воскресенье</option>
            </select>
          </div>
          <div>
            <p>Время</p>
            <select onChange={this.props.handleChangeSelectTime.bind(this)}>
              <option>-Выберите время-</option>
              <option value="13:30">13:30</option>
              <option value="15:00">15:00</option>
              <option value="19:00">19:00</option>
            </select>
          </div>
          <div>
            <p>Зал</p>
            <select onChange={this.props.handleChangeSelectHall.bind(this)}>
              <option>-Выберите зал-</option>
              <option value="Красный">Красный</option>
              <option value="Белый">Белый</option>
              <option value="Желтый">Желтый</option>
            </select>
          </div>
          <div className="filter_footer">
            <input type="button" value="Бронировать" onClick={this.props.methodBuy.bind(this)}/>
            <span>Всего: {this.props.state.price} грн.</span>
          </div>
        </div>
        <div className="main">
          <p><span>1</span>Выберите место.</p>
          <p><span>2</span>Нажмите "Бронировать".</p>
          <div className="bookedText">
            {this.props.state.text.map((text, index) => 
              <p key={index}>{text}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
