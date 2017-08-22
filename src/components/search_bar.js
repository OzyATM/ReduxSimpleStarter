import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: ''};
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
        return (
            <div>
            <input 
            value={this.state.term}
            onChange={this.handleInputChange} />
            </div>
        );
    }

    handleInputChange(event) {
        this.setState({ term: event.target.value });
    }
}

export default SearchBar;