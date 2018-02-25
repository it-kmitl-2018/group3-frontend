import React from "react"

class Example extends React.Component {
  state = {}

  cardStyle = {
    width: "400px",
  }

  render() {
    return (
      <div>
        <div className="card" style={ this.cardStyle }>
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
