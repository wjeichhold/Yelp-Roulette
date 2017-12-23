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
      long: null,
      lat: null
    }
  }

  search(searchTerm) {
    console.log(searchTerm)
    $.ajax({
      type: "POST",
      url: "/biz",
      data: {searchTerm: searchTerm, long: this.state.long, lat: this.state.lat},
      success: function(data) {console.log(data)}
    })

  }

  componentDidMount() {
    // var options = {
    //   enableHighAccuracy: true,
    //   timeout: 5000,
    //   maximumAge: 0
    // };

    // var success = function(pos) {
    //   var long = pos.coords.longitude;
    //   var lat = pos.coords.latitude;
    //   console.log(long, lat)
    //   this.setState({long: long})
    //   // console.log(this.state)
    //   // console.log('Your current position is:');
    //   // console.log(`Latitude : ${crd.latitude}`);
    //   // console.log(`Longitude: ${crd.longitude}`);
    //   // console.log(`More or less ${crd.accuracy} meters.`);
    // };

    // var error = function(err) {
    //   console.warn(`ERROR(${err.code}): ${err.message}`);
    // };

    // navigator.geolocation.getCurrentPosition(success, error, options);


    // $.ajax({
    //   url: '/biz', 
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
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