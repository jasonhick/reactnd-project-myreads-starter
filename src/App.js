import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import BookCase from './BookCase';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import './App.css';

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
        keywords: [
            'Android',
            'Art',
            'Artificial Intelligence',
            'Astronomy',
            'Austen',
            'Baseball',
            'Basketball',
            'Bhagat',
            'Biography',
            'Brief',
            'Business',
            'Camus',
            'Cervantes',
            'Christie',
            'Classics',
            'Comics',
            'Cook',
            'Cricket',
            'Cycling',
            'Desai',
            'Design',
            'Development',
            'Digital Marketing',
            'Drama',
            'Drawing',
            'Dumas',
            'Education',
            'Everything',
            'Fantasy',
            'Film',
            'Finance',
            'First',
            'Fitness',
            'Football',
            'Future',
            'Games',
            'Gandhi',
            'Homer',
            'Horror',
            'Hugo',
            'Ibsen',
            'Journey',
            'Kafka',
            'King',
            'Lahiri',
            'Larsson',
            'Learn',
            'Literary Fiction',
            'Make',
            'Manage',
            'Marquez',
            'Money',
            'Mystery',
            'Negotiate',
            'Painting',
            'Philosophy',
            'Photography',
            'Poetry',
            'Production',
            'Programming',
            'React',
            'Redux',
            'River',
            'Robotics',
            'Rowling',
            'Satire',
            'Science Fiction',
            'Shakespeare',
            'Singh',
            'Swimming',
            'Tale',
            'Thrun',
            'Time',
            'Tolstoy',
            'Travel',
            'Ultimate',
            'Virtual Reality',
            'Web Development',
            'iOS'
        ]
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

            <Route exact path='/' render={() => (
                <div className='list-books'>
                    <div className='list-books-title'>
                        <h1>MyReads</h1>
                    </div>
                    <div className='list-books-content'>
                        <BookCase
                            shelves={this.state.shelves}
                            books={this.state.books}/>
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
                        books={this.state.search} />
                </div>
            )}/>

        </div>
        );
    }
}

export default MyBooksApp;
