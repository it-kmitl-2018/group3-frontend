import { React, Component } from "react"

class Example extends Component {
  state = {}

  render() {
    return (
      <div>
        <div className="card">
          <img className="card-img-top" alt="this is a example." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card.
            </p>
            <button type="submit" className="btn btnPrimary">
              Button
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Example
