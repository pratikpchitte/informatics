import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    return (
      <div>
        <div className="card my-3">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp" className="card-img-top" alt="Sunset Over the Sea"/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p className="card-text"><small className="text-muted">By Unknown on Date </small></p>
          </div>
      </div>
      </div>
    )
  }
}

export default NewsItem





