import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'wMVi9jDZ9deZJstwIGk8sNHNC8vC03Vg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends React.Component {

    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    fetchdata(event){
        event.preventDefault()
        fetch(URL+`${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data => this.setState({reviews: data.results}))
    }

handleChange = (event) => {
    event.preventDefault()
    this.setState({searchTerm: event.target.value})
    
}


    render (){
        return (<div className='searchable-movie-reviews'>
            <form onSubmit={this.fetchdata}>
            <label>Your search </label>
            <input type='text' value={this.state.searchTerm} onChange={this.handleChange}></input>
            <button  >find</button>
            </form>
            <MovieReviews reviews={this.state.reviews}/>
        </div>)
    }
}
