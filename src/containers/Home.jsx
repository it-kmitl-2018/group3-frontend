import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { sendAddresssIfNeeded } from "../redux/address"
import EtaxForm from "../components/EtaxForm/EtaxForm"

class Home extends Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(address) {
    this.props.dispatch(sendAddresssIfNeeded(address))
  }

  render() {
    return (
      <div className="container">
        <div className="py-5 text-center">
          <h2>E-TAX Invoice XML Generator</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam amet
            quos eos id officia voluptatem quae eveniet! Natus, non a.
          </p>
          <EtaxForm submitForm={ this.submitForm } />
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(Home)
