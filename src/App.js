import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import BookCase from './components/BookCase';
import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';
import './App.css';

class MyBooksApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleMoveBook = this.handleMoveBook.bind(this);
    }

    state = {
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
                id: 'none',
                title: 'None'
            }
        ],
        books: [],
        query: '',
        search: [],
        searchError: false
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
        });
    }

    handleFilterTextChange(text) {

        text = text.trim();
        this.setState({query: text});

        if (text > '') {
            this.updateQuery(text);
        } else {
            this.setState({
                search: []
            });
        }
    }

    handleMoveBook(book, shelf) {
        BooksAPI.update(book, shelf).then(() => {
            book.shelf = shelf;
            this.setState(state => ({
                books: state.books.filter(b => b.id !== book.id).concat([book]),
            }));
        });
    }

    updateQuery = (query) => (
        BooksAPI.search(query.trim()).then((searchResults) => {
            if (searchResults.error) {
                this.setState({
                    searchError: true,
                    search: []
                });
            } else {
                const {books} = this.state;
                searchResults.map((result) => {
                    let currentBook = books.find((book) => book.id === result.id);
                    result.shelf = (currentBook) ? currentBook.shelf : 'none';
                });
                this.setState({
                    searchError: false,
                    search: searchResults
                });
            }
        })
    );

    render() {
        return (

        <div className='app'>

            <Route exact path='/' render={() => (
                <div className='list-books'>
                    <div className='list-books-title'>
                        <h1 className='baskerville f1'>MyReads</h1>
                    </div>
                    <div className='list-books-content'>
                        <BookCase
                            shelves={this.state.shelves}
                            books={this.state.books}
                            onMoveBook={this.handleMoveBook}/>
                    </div>
                    <div className='open-search'>
                        <Link to='/search'>Add a book</Link>
                    </div>
                </div>
            )}/>

            <Route exact path='/search' render={() => (
                <div>
                    <SearchBox
                        query={this.state.query}
                        onFilterTextChange={this.handleFilterTextChange}/>
                    <SearchResults
                        books={this.state.search}
                        shelves={this.state.shelves}
                        onMoveBook={this.handleMoveBook}
                        searchError={this.state.searchError}/>
                </div>
            )}/>

        </div>
        );
    }
}

export default MyBooksApp;
