import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book){
      return (
          <div>
          <h3>Book Details</h3>
          <p className="book-details">Please select a book to get its details </p>
          </div>
          );
    }

    return (
      <div>
      <h3>Book Details</h3>
      <div className="book-details">{this.props.book.title}  <i>by {this.props.book.author}</i></div>
      </div>
  );
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
