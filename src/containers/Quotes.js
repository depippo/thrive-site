import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { bindActionCreators } from 'redux'; 
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props;
    return (
      <div>
        <div>
        <h4>Comments</h4>
        <div className="hline"></div>
          <div className="row">
            <div className="col-md-4">
            <br/>
              {quotes.map(quote => <QuoteCard key={quote.id} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote} quote={quote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    quotes: state.quotes
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({removeQuote, upvoteQuote, downvoteQuote}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);