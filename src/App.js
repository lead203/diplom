import React, {PureComponent} from 'react';
import Header from './Header';
import Main from './Main';

import './App.css';

export default class EventListNew extends PureComponent {
  constructor() {
		super();
    this.state = { 
      text: ['filter']
    }  
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Main />
        </main>
      </div>
    );
  }
}
