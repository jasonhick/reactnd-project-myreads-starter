import React from 'react';
import ShelfChanger from './../ShelfChanger';

class Book extends React.Component {
    render() {
        const {book, shelves, onMoveBook} = this.props;
        return (
            <li className='book'>
                <div className='book-top'>
                    <div className='book-cover' style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                    <ShelfChanger
                        book={book}
                        currentShelf={book.shelf}
                        shelves={shelves}
                        onMoveBook={onMoveBook}/>
                </div>
                <div className='book-title'>{book.title}</div>
                <div className='book-authors'>{book.authors.join('\r\n')}</div>
            </li>
        );
    }
}

export default Book;
