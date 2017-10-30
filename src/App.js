import React from 'react';
import PropTypes from 'prop-types';
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
        const myShelves = shelves.filter((shelf) => shelf.id !== 'search');
        const searchShelf = shelves.filter((shelf) => shelf.id === 'search');

        return (
            <div className='bookshelf'>
                {myShelves.map((shelf) => (
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
                {books && books.map((book) => (
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

class SearchResults extends React.Component {
    render() {
        const {books} = this.props;
        return (
            <div className='bookshelf'>
                <BookList books={books} />
            </div>
        );
    }
}

class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    };

    render() {
        return (
            <div className='search-books'>
                <div className='search-books-bar'>
                    <a className='close-search'>Close</a>
                    <div className='search-books-input-wrapper'>
                        <input type='text'
                            placeholder='Search by title or author'
                            value={this.props.query}
                            onChange={this.handleFilterTextChange}/>
                    </div>
                </div>
            </div>
        );
    }
}

class MyBooksApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

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
            },
            {
                id: 'search',
                title: 'Search Results'
            }
        ],
        books: [],
        query: '',
        search: [],
        showSearchPage: false,

    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
        });
    }

    handleFilterTextChange(text) {
        this.setState({
            query: text
        });
        this.updateQuery(text);
    }

    updateQuery = (query) => (
        BooksAPI.search(query).then((data) => {
            this.setState({search: data});
        })
    );

    render() {
        return (
            <div className='app'>
                <SearchBox
                    query={this.state.query}
                    onFilterTextChange={this.handleFilterTextChange}/>
                <SearchResults
                    books={this.state.search} />
                <BookCase
                    shelves={this.state.shelves}
                    books={this.state.books}/>
            </div>
        );
    }
}

export default MyBooksApp;
