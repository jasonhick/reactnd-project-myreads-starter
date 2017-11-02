import React from 'react';

class ShelfChanger extends React.Component {

    render() {

        const {book, shelves, currentShelf, onMoveBook} = this.props;
        let selectValue = currentShelf || 'none';

        let handleOnChange = e => {
            onMoveBook(book, e.target.value);
        };

        return (
            <div className='book-shelf-changer'>
                <select defaultValue={selectValue} onChange={e => handleOnChange(e)}>
                    <option disabled>Move to...</option>
                    {shelves && shelves.map((shelf) => (
                        <option value={shelf.id} key={shelf.id}>{shelf.title}</option>
                    ))}
                </select>
            </div>
        );
    }
}

export default ShelfChanger;
