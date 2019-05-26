import React, {PureComponent} from 'react';
import Header from './Header';
import Main from './Main';

import './App.css';

export default class EventListNew extends PureComponent {
  
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
