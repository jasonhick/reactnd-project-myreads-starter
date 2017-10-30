import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import './App.css';

class BookList extends React.Component {
    render() {
        const {books} = this.props;
        return (
            <ol className='books-grid'>
                {books && books.map((book) => (
                    <Book book={book} key={book.id} />
                ))}
            </ol>
        );
    }
}

export default BookList;
