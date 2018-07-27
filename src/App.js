import React from 'react';
import './App.css';
import BusinessList from '../src/components/BusinessList/BusinessList';
import SearchBar from '../src/components/SearchBar/SearchBar';
import Yelp from '../src/util/Yelp.js';

const business = {
  id: Yelp.id,
  imageSrc: Yelp.imageSrc,
  name: Yelp.name,
  address: Yelp.address,
  city: Yelp.city,
  state: Yelp.state,
  zipCode: Yelp.zipCode,
  category: Yelp.category,
  rating: Yelp.rating,
  reviewCount: Yelp.reviewCount
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
};

export default App;
