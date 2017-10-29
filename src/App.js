import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BookCase extends React.Component {
    render() {
        const {books, shelves} = this.props;
        return (
            <div className='book-shelf'>
                <h1>My Reads</h1>
                <BookShelf books={books} shelves={shelves}/>
            </div>
        );
    }
}

class BookShelf extends React.Component {
    render() {
        const {books, shelves} = this.props;
        return (
            <div className='bookshelf'>
                {shelves.map((shelf) => (
                    <div key={shelf.id}>
                        <h2 className='bookshelf-title'>{shelf.title}</h2>
                        <BookList books={books.filter((book) => book.shelf === shelf.id)} />
                    </div>
                ))}
            </div>
        );
    }
}

class BookList extends React.Component {
    render() {
        const {books} = this.props;
        return (
            <ol className='books-grid'>
                {books.map((book) => (
                    <li className='book' key={book.id}>
                        <div className='book-top'>
                            <img src={book.imageLinks.smallThumbnail} alt=''/>
                        </div>
                        <div className='book-title'>{book.title}</div>
                        <div className='book-authors'>{book.authors}</div>
                    </li>
                ))}
            </ol>
        );
    }
}

class SearchBox extends React.Component {
    render() {
        return (
            <div className='search-books'>
                Book search
            </div>
        );
    }
}

class MyBooksApp extends React.Component {

    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        shelves: [
            {
                id: 'currentlyReading',
                title: 'Currently Reading'
            },
            {
                id: 'wantToRead',
                title: 'Want to Read'
            },
            {
                id: 'read',
                title: 'Read'
            }
        ],
        books: [],
        showSearchPage: false,
    };
    ant;
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
        });
    }

    render() {
        return (
            <div className='app'>
                <BookCase books={this.state.books} shelves={this.state.shelves}/>
            </div>
        );
    }
}

export default MyBooksApp;
