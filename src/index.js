import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {upcs} from './upcs'

ReactDOM.render(
    <div>
        <Card id={upcs[0].id} productname={upcs[0].productname} upc={upcs[0].upc}/>
        <Card id={upcs[1].id} productname={upcs[1].productname} upc={upcs[1].upc}/>
        <Card id={upcs[2].id} productname={upcs[2].productname} upc={upcs[2].upc}/>
    </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
