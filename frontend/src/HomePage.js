import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit() {
        this.props.history.push("/book-search");
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button type="submit">Go to Book Search</button>
            </form>
        );
    }
}

export default HomePage;