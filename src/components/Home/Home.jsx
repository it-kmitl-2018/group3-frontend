import React, { Component } from "react"
import EtaxForm from "../EtaxForm/EtaxForm"

class Home extends Component {
  state = {}

  render() {
    return (
      <div className="container">
        <div className="py-5 text-center">
          <h2>E-TAX Invoice XML Generator</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam amet
            quos eos id officia voluptatem quae eveniet! Natus, non a.
          </p>
          <EtaxForm />
        </div>
      </div>
    )
  }
}

export default Home
