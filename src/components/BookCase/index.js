import React from 'react';
import BookShelf from './../BookShelf';

class BookCase extends React.Component {

    render() {

        const {books, shelves, onMoveBook} = this.props;
        const myShelves = shelves.filter((shelf) => shelf.id !== 'none');

        return (
            <div className='book-case'>
                {myShelves.map((shelf) => (
                    <BookShelf
                        books={books.filter((book) => book.shelf === shelf.id)}
                        currentShelf={shelf}
                        shelves={shelves}
                        key={shelf.id}
                        onMoveBook={onMoveBook}/>
                ))}
            </div>
        );
    }
}

export default BookCase;
