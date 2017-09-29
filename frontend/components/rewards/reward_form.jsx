import React from 'react';
import { withRouter } from 'react-router-dom';


class RewardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
              gift: "",
              project_id: 1,
              gift_description: "",
              pledge_amount: ""
            };
    this.handleSubmit= this.handleSubmit.bind(this);
    this.renderErrors= this.renderErrors.bind(this);
  }





  handleSubmit(e) {
    e.preventDefault();
    let newReward = Object.assign({}, this.state);
     newReward = Object.assign(newReward, {project_id: this.props.match.params.projectID});
    this.props.postReward(newReward).then((result) => {
      debugger;
      return (this.props.history.push(`/projects/${result.reward.project_id}`));
    });

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    // debugger
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
        <input type="text" placeholder="What gift will the users get?" onChange={this.update('gift')}></input>
        </label>
          <br></br>
        <label>Gift Description
          <br></br>
        <textarea placeholder="What sorts of goodies does that gift entail?" onChange={this.update('gift_description')}></textarea>
        </label>
          <br></br>
        <label>Donation Amount
          <br></br>
        <input type="number" placeholder="How much will users be donating?" onChange={this.update('pledge_amount')}></input>
        </label>
          <br></br>
        <input type="submit" value="Create Your Reward!" />
        </form>
      </div>
    </div>
  );


}

}

export default withRouter(RewardForm);
