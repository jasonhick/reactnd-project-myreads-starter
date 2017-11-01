import React from 'react';
import PropTypes from 'prop-types';
import Book from './../Book';

class BookShelf extends React.Component {
    render() {

        const {books, shelves, currentShelf, onMoveBook} = this.props;

        return (
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>{currentShelf.title}</h2>
                {books.error ? (
                    <h3>Sorry, there were no results for your search</h3>
                ) : (
                    <ol className='books-grid'>
                        {books && books.map((book) => (
                            <Book
                                book={book}
                                key={book.id}
                                shelves={shelves}
                                onMoveBook={onMoveBook}/>
                        ))}
                    </ol>
                )}
            </div>
        );
    }
}

export default BookShelf;
