import React from 'react';
import { withRouter } from 'react-router-dom';


class RewardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
              gift: "",
              project_id: 1,
              gift_description: "",
              pledge_amount: 0
            };
    this.handleSubmit= this.handleSubmit.bind(this);
    this.renderErrors= this.renderErrors.bind(this);
  }





  handleSubmit(e) {
    e.preventDefault();
    let newReward = Object.assign({}, this.state);

    this.props.createReward(newReward).then((result) => {
      return (this.props.history.push(`/projects/${result.project.id}`));
    });

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
    return (
      <ul className="form-errors">
        <span>"Whoa Whoa Whoa not so fast there!"</span>
        <br></br>


        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }
}


render() {



  return (
    <div>
      <div className="form-container">
        <h2 className="form-header">Build your QuickStarter Rewards Here!</h2>
        <form onSubmit={this.handleSubmit} className="reward-form">
        {this.renderErrors()}
        <label>Reward Gift
          <br></br>
        <input type="text" placeholder="What gift will we get?" onChange={this.update('gift')}></input>
        </label>





        </form>
      </div>
    </div>
  );


}

}

export default withRouter(RewardForm);
