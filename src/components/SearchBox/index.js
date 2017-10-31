import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to='/' className='close-search'>Close</Link>
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

export default SearchBox;
