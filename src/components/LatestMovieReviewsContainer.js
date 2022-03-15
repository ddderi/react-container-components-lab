import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'wMVi9jDZ9deZJstwIGk8sNHNC8vC03Vg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here


export default class LatestMovieReviewsContainer extends React.Component {

constructor(){
    super()
    this.state = {
        reviews: []
    }
}


componentDidMount(){
    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({reviews: data.results}))
}

// this.setState({review: data.results.display_title})


    render(){
        return (
            <div className='latest-movie-reviews'><MovieReviews reviews={this.state.reviews}/></div>
        )
    }
}

//<MovieReviews reviews={this.state.reviews}