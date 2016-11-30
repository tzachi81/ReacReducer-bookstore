import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
          return (
            <li
              key={book.title}
              onClick={() => this.props.selectBook(book)}
              className="list-group-item">
              {book.title}
            </li>
            );
        });
    }

    render() {
        return (
            <div className="col-sm-4">
            <h3 >Book List</h3>
            <ul className="list-group">
                {this.renderList()}
            </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (BookList);
