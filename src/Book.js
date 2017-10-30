import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Book extends React.Component {
    render() {
        const {book} = this.props;
        return (
            <li className='book'>
                <div className='book-top'>
                    <img src={book.imageLinks.smallThumbnail} alt=''/>
                </div>
                <div className='book-title'>{book.title}</div>
                <div className='book-authors'>{book.authors}</div>
            </li>
        );
    }
}

export default Book;
