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
            <li>
                <div className='book'>
                    <div className='book-top'>
                        <div className='book-cover'
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${bookCover})`
                            }}>
                            <ShelfChanger
                                book={book}
                                currentShelf={book.shelf}
                                shelves={shelves}
                                onMoveBook={onMoveBook}/>
                        </div>
                    </div>
                    <div className='book-title'>{book.title}</div>
                    {book.authors && book.authors.map((author) => (
                        <span className='book-authors'>{author}</span>
                    ))}
                </div>



            </li>
        );
    }
}

export default Book;
