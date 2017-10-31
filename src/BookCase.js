import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import './App.css';

class BookCase extends React.Component {
    render() {

        const {books, shelves} = this.props;
        const myShelves = shelves.filter((shelf) => shelf.id !== 'search');

        return (
            <div className='book-case'>
                {myShelves.map((shelf) => (
                    <BookShelf books={books.filter((book) => book.shelf === shelf.id)} shelf={shelf} key={shelf.id}/>
                ))}
            </div>
        );
    }
}

export default BookCase;
