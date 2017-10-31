import React from 'react';
import PropTypes from 'prop-types';
import Book from './../Book';

class BookShelf extends React.Component {
    render() {

        const {books, shelf} = this.props;

        return (
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>{shelf.title}</h2>
                <ol className='books-grid'>
                    {books && books.map((book) => (
                        <Book book={book} key={book.id} />
                    ))}
                </ol>
            </div>

        );
    }
}

export default BookShelf;
