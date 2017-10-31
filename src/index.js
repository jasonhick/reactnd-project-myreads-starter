import React from 'react';
import ReactDOM from 'react-dom';
import MyBooksApp from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
    <BrowserRouter><MyBooksApp /></BrowserRouter>,
    document.getElementById('root')
 );
