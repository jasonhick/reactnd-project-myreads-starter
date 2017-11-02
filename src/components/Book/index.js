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
        const bookCover = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : 'http://via.placeholder.com/130x200?text=404';

        return (
            <li className='book'>
                <div className='book-top'>
                    <a href={book.previewLink} target='_new'>
                        <img className='book-cover'
                            src={bookCover}
                            alt={book.title}/>
                    </a>
                    <ShelfChanger
                        book={book}
                        currentShelf={book.shelf}
                        shelves={shelves}
                        onMoveBook={onMoveBook}/>
                </div>
                <div className='book-title'>{book.title}</div>
                <div className='book-title'>{book.subtitle}</div>
                <div className='book-authors'>{this.getAuthors(book.authors)}</div>
            </li>
        );
    }
}

export default Book;
