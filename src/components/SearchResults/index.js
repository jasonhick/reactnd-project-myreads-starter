import React from 'react';
import BookShelf from './../BookShelf';

class SearchResults extends React.Component {
    render() {
        const {books} = this.props;
        return (
            <div className='bookshelf'>
                <BookShelf books={books} shelf='Search results'/>
            </div>
        );
    }
}

export default SearchResults;
