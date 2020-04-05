import React from "react";

class CustomFundForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.support;
    this.change = this.change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.backed_amount == 0) {
      return null;
    }
    this.props
      .fundAmount(this.state)
      .then(() => this.setState({ backed_amount: 0 }));
  }

  change(e) {
    this.setState({ backed_amount: e.target.value });
  }

  render() {
    return (
      <div className="grid show--rewards-custom">
        <div className="rewards-fund-field">
          $
          <input
            type="number"
            value={this.state.backed_amount}
            onChange={this.change}
          />
        </div>
        <div className="grid rewards-fund-button" onClick={this.handleSubmit}>
          Support the Cause!
        </div>
      </div>
    );
  }
}

export default CustomFundForm;
