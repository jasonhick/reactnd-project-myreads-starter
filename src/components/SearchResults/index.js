import React from 'react';
import BookShelf from './../BookShelf';

class SearchResults extends React.Component {
    render() {
        const {books, shelves, onMoveBook} = this.props;
        return (
            <div className='bookshelf'>
                <BookShelf
                    books={books}
                    currentShelf='none'
                    shelves={shelves}
                    onMoveBook={onMoveBook}/>
            </div>
        );
    }
}

export default SearchResults;
