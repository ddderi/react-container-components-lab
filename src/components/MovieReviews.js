// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
return <div className="review-list"> {props.reviews.map((element,index) => <div key={index}>{element.display_title}<ul><li>{element.publication_date}</li></ul></div>)}</div>
} 

export default MovieReviews


