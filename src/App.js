import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BookCase extends React.Component {
    render() {
        return (
            <div className='book-shelf'>
                <h1>My Books</h1>
                <BookShelf books={this.props.books}/>
            </div>
        );
    }
}

class BookShelf extends React.Component {
    render() {
        const {books} = this.props;
        return (
            <div className='book-shelf'>
                // TODO: Find a way to group books by category
                <ol className='book-list'>
                    <BookList books={this.props.books}/>
                </ol>
            </div>
        );
    }
}

class BookList extends React.Component {
    render() {

        const {books} = this.props;

        return (
            <div className='book-list'>
                {books.map((book) => (
                    <li key={book.id}>
                        <h4 className='book-name'>{book.title}</h4>
                        <img src={book.imageLinks.smallThumbnail} alt=''/>
                    </li>
                ))}
            </div>
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
        books: [],
        showSearchPage: false,
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
        });
    }

    render() {
        return (
            <div className='app'>
                <BookCase books={this.state.books} />
            </div>
        );
    }
}

export default MyBooksApp;
