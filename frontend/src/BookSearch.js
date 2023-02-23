import React, { Component } from 'react';

class BookSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
            books: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
componentDidMount() {
    fetch(`http://localhost:8080/books-all`)
        .then(response => response.json())
        .then(books => {
            this.setState({ books });
        });
}

    handleChange(event) {
        this.setState({ keyword: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(`http://localhost:8080/books?q=${this.state.keyword}`)
            .then(response => response.json())
            .then(books => {
                this.setState({ books });
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.keyword}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Search</button>
                </form>
                {this.state.books.map(book => (
                    <div key={book.id}>
                        <h4>Title: {book.title}</h4>
                        <p>Author: {book.author}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default BookSearch;
