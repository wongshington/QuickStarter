import React from 'react';
import { withRouter } from 'react-router-dom';

import { getCategories } from '../../actions/category_actions';


import Dropzone from 'react-dropzone';
import request from 'superagent';

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


componentDidMount() {
this.props.clearErrors();
}


// componentWillReceiveProps(nextProps) {
// this.props.clearErrors();
// }

onImageDrop(files) {
this.setState({
  uploadedFile: files[0]
});
this.handleImageUpload(files[0]);
}

handleImageUpload(file) {
  let upload = request.post(CLOUDINARY_UPLOAD_URL)
                      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                      .field('file', file);

  upload.end((err, response) => {
    if (err) {
      console.error(err);
    }

    if (response.body.secure_url !== '') {
      this.setState({
        title_image: response.body.secure_url
      });
    }
  });
}


  handleSubmit(e) {
    e.preventDefault();
    let newProject = Object.assign({}, this.state);
    if (this.state.title_image === "") {
      newProject = Object.assign(newProject, {title_image: PHOTO});
    }

    this.props.createProject(newProject).then((result) => {
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
          <br></br>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      );
    }
  }

render () {



  return (
    <div >
        <div className="form-container">
        <h2 className="form-header">Get your QuickStart in just a few minutes here!</h2>
        <form onSubmit={this.handleSubmit} className="project-form">
              {this.renderErrors()}
          <label>Project Title
            <br></br>
          <input type="text" placeholder="What will you call your QuickStarter?" onChange={this.update('title')}></input>
          </label>
            <label>Image
              <br></br>
              <div>
                <div className="FileUpload">
                  <Dropzone
                    onDrop={this.onImageDrop.bind(this)}
                    multiple={false}
                    accept="image/*">
                    <div>Upload your QuickStarter project photo here!</div>
                  </Dropzone>
                </div>

                <div>
                  {this.state.title_image === '' ? null :
                    <div>
                      <p>{this.state.uploadedFile.name}</p>
                      <img src={this.state.title_image} />
                    </div>}
                  </div>
                </div>
              </label>
            <br></br>
          <label>Project Blurb/Short Snippet
            <br></br>
          <textarea placeholder="If you only had two sentences to describe your project..." onChange={this.update('blurb')} className="form-blurb"></textarea>
          </label>
            <br></br>
          <label>Project Description
            <br></br>
          <textarea  placeholder="Let's see your story telling skills at work here!" onChange={this.update('description')} className="form-description"></textarea>
          </label>
            <br></br>
          <label>Category
            <br></br>
            <select onChange={this.update('category_id')}>
              <option>What kind of QuickStarter is yours?</option>
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
          <input type="date" onChange={this.update('funding_deadline')} ></input>
          </label>
          <br></br>
            <label>Funding Goal
              <br></br>
            <input type="number" onChange={this.update('funding_goal')}placeholder="How much to get your QuickStart?"></input>
            </label>
        <br></br>
          <input className="form-submit" type="submit" value="Get Your QuickStart!" />
        </form>
      <br></br>
    </div>
    </div>
  );
}
}

export default withRouter(ProjectForm);
