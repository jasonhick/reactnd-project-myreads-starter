import React from 'react';
import PropTypes from 'prop-types';
import BookList from './BookList';
import './App.css';

class BookShelf extends React.Component {
    render() {

        const {books, shelves} = this.props;
        const myShelves = shelves.filter((shelf) => shelf.id !== 'search');
        const searchShelf = shelves.filter((shelf) => shelf.id === 'search');

        return (
            <div className='bookshelf'>
                {myShelves.map((shelf) => (
                    <div key={shelf.id}>
                        <h2 className='bookshelf-title'>{shelf.title}</h2>
                        <BookList books={books.filter((book) => book.shelf === shelf.id)} />
                    </div>
                ))}
            </div>
        );
    }
}

export default BookShelf;
