import React from 'react';
import ShelfChanger from './../ShelfChanger';

class Book extends React.Component {

    /**
     * [getAuthors] - returns a list of correclty formatted authors
     * @param  {array} arr the list of authors
     * @return {string}    formatted list of authors
     */
    getAuthors = (arr) => {
        if (arr) {
            return arr.join('\r\n');
        } else {
            return 'Unknown author';
        }
    };

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
                <div className='book-authors'>{this.getAuthors(book.authors)}</div>
            </li>
        );
    }
}

export default Book;
