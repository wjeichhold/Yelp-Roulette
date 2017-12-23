import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      checker: ''
    }
  }

  search(searchTerm, long, lat) {
    $.ajax({
      type: "POST",
      url: "/biz",
      data: {searchTerm: searchTerm, long: long, lat: lat},
      success: (data) => {
        $.ajax({
      url: '/biz', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });

}
    })

  }

  componentDidMount() {

    $.ajax({
      url: '/biz', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Yelp Roulette!!</h1>
      <List items={this.state.items}/>
      <Search parentSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));