import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.onChange = this.onChange.bind(this)
    this.sendSearch = this.sendSearch.bind(this)
  }

  onChange(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  sendSearch() {
    this.props.parentSearch(this.state.searchTerm);
}

  render() {
    return (<div> 
    What are you in the mood for? <input value={this.state.searchTerm} onChange={this.onChange}/>
    <button onClick={this.sendSearch}> Spin the wheel! </button>
    </div>)
  }

}

export default Search;