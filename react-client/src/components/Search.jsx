import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      long: null,
      lat: null
    }
    this.onChange = this.onChange.bind(this)
    this.sendSearch = this.sendSearch.bind(this)
    this.getLocation = this.getLocation.bind(this)
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });
  }

  sendSearch() {
    if (this.state.long !== null) {
    this.props.parentSearch(this.state.searchTerm, this.state.long, this.state.lat);
    } else {
    window.alert('aye lemme get your location first chill')
    }
    
  }

  getLocation() {

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    var success = (pos) => {
      var long = pos.coords.longitude; 
      var lat = pos.coords.latitude;
      this.setState({ long, lat }, () => console.log(this.state));
    };

    var error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  
  }

  componentDidMount() {
    this.getLocation()

  }

  render() {
    return (<div> 
    What are you in the mood for? <input value={this.state.searchTerm} onChange={this.onChange}/>
    <button onClick={this.sendSearch}> Spin the wheel! </button>
    </div>)
  }

}

export default Search;