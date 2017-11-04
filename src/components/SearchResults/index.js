import React from 'react';
import BookShelf from './../BookShelf';
import SearchError from './../SearchError';

class SearchResults extends React.Component {
    render() {
        const {books, shelves, onMoveBook, searchError} = this.props;

        if (searchError) {
            return <SearchError/>;
        }

        return (
            <div className='bookshelf'>
                <BookShelf
                    books={books}
                    currentShelf='Search Results'
                    shelves={shelves}
                    onMoveBook={onMoveBook}/>
            </div>
        );
    }
}

export default SearchResults;
