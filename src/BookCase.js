import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import './App.css';

class BookCase extends React.Component {
    render() {
        const {books, shelves} = this.props;
        return (
            <div className='book-shelf'>
                <h1>My Reads</h1>
                <BookShelf books={books} shelves={shelves}/>
            </div>
        );
    }
}

export default BookCase;
