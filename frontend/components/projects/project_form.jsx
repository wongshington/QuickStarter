import React from 'react';
import { withRouter } from 'react-router-dom';

import { getCategories } from '../../actions/category_actions';
import UploadPhoto from './photo_upload';



const PHOTO = "http://res.cloudinary.com/quickstarter/image/upload/c_scale,w_900/v1506312200/octavio-fossatti-37556_zgdbn9.jpg";
const CLOUDINARY_UPLOAD_PRESET = "pysl5ph0";
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/quickstarter/upload';


class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          title: "",
          blurb: "",
          description: "",
          funding_deadline: "",
          title_image: "",
          category_id: "",
          funding_goal: "",
          total_funded: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);

  }


// componentDidMount() {
//   // will need this for when i make the edit form part of this form
// }

  handleSubmit(e) {
    e.preventDefault();

    let newProject = Object.assign({}, this.state);
    this.props.createProject(newProject);
  }



  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

    renderErrors() {
      return (
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      );
    }

render () {


  return (
    <div >
        <div className="form-container">
        <h2 className="form-header">Get you QuickStart in just a few minutes here!</h2>
        <form onSubmit={this.handleSubmit} className="project-form">
              {this.renderErrors()}
          <label>Project Title
            <br></br>
          <input type="text" placeholder="What will you call your QuickStart?" onChange={this.update('title')}></input>
          </label>
            <br></br>
          <label>Project Blurb/Short Snippet
            <br></br>
          <textarea placeholder="If you only had two sentences to describe your project..." onChange={this.update('blurb')} className="form-blurb"></textarea>
          </label>
            <br></br>
          <label>Project Description
            <br></br>
          <textarea  placeholder="Let's see your story telling skills at work here"onChange={this.update('description')} className="form-description"></textarea>
          </label>
            <br></br>
          <label>Image
            <br></br>
            <UploadPhoto/>
          </label>
            <br></br>
          <label>Category
            <br></br>
            <select onChange={this.update('category_id')}>
              <option value="1" >Art</option>
              <option value="2">Food</option>
              <option value="3">Music</option>
              <option value="4">Technology</option>
              <option value="5">Fashion</option>
              <option value="6">Film & Video</option>
            </select>
          </label>
            <br></br>
          <label>Funding Deadline
            <br></br>
          <input type="date" ></input>
          </label>
        <br></br>
          <input type="submit" value="Get Your QuickStart!" />
        </form>
      <br></br>
    </div>
    </div>
  );
}
}

export default withRouter(ProjectForm);
