import React from 'react'

function MovieList() {
    return (
        <div className="app">
            <h1 className="title">Movie List</h1>
            <div className="form">
                <label htmlFor="" className="label">Movie Name</label>
                <input type="text" className="input" name="movieName"/>
                <label htmlFor="" className="label">Movie Review</label>
                <input type="text" className="input" name="review" />
            </div>
        </div>
    )
}

export default MovieList
