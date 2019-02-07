import React from 'react';
import { withRouter } from 'react-router-dom';
import FirstForm from '../forms/first_page';
import SecondForm from '../forms/second_page';
import ThirdForm from '../forms/third_page';

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
          formPage: 1,
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
    this.update = this.update.bind(this);
  }


  componentDidMount() {
    this.props.clearErrors();
    this.props.getCategories();
  }

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
    // debugger
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
      if (this.props.errors.length > 0) {
      return (
        <ul className="form-errors">
          <span>"Whoa Whoa Whoa not so fast there!"</span>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      );
    }
  }

  formRender(){
    switch (this.state.formPage) {
      case 1:
        return <FirstForm 
                  title={this.state.title} 
                  category={this.state.category_id} 
                  update={this.update} 
                  categories={this.props.categories} />;
      case 2:
        return <SecondForm 
                  update={this.update} 
                  blurb={this.state.blurb}
                  description={this.state.description}/>;
      case 3:
        return <ThirdForm 
                  update={this.update} 
                  goal={this.state.funding_goal}
                  deadline={this.state.funding_deadline}/>;
      default:
        return <FirstForm
                  title={this.state.title}
                  category={this.state.category_id}
                  update={this.update}
                  categories={this.props.categories} />;
    }
  }

  pageTurner(dir){ 
    let diff = dir == "prev" ? -1 : 1;
    const newForm = diff + this.state.formPage;
    if (newForm > 3 || newForm < 1) return;
    return e => {
      this.setState({formPage: newForm});
    };
  }

  displayNavButtons(){
    const next = this.state.formPage >= 3 ? <div></div> : <div onClick={this.pageTurner("next")}>Next</div>;
    const prev = this.state.formPage <= 1 ? <div></div> : <div onClick={this.pageTurner("prev")}>Previous</div>;

    return (
      <div className="grid">
        {prev}
        {next}
      </div>
    );

  }

  render () {
    console.log(this.state);
    return (
      <div className="form--container grid">
        <h2 className="form--header">Get your QuickStart in just a few minutes here!</h2>
        {this.displayNavButtons()}
        {this.formRender()}
      </div>
    );

    // return (
    //   <div className="form--container grid">
    //     <h2 className="form--header">Get your QuickStart in just a few minutes here!</h2>
    //     <form onSubmit={this.handleSubmit} className="form--main grid">
    //           {this.renderErrors()}
    //         <label>Project Title
    //           <input type="text" placeholder="What will you call your QuickStarter?" onChange={this.update('title')}></input>
    //         </label>
    //         <label>Image
    //           <div>
    //             <div className="from--upload">
    //               {/* <Dropzone
    //                 onDrop={this.onImageDrop.bind(this)}
    //                 multiple={false}
    //                 accept="image/*">
    //                 <div>Upload your QuickStarter project photo here!</div>
    //               </Dropzone> */}
    //             </div>
    //             <div>
    //               {this.state.title_image === '' ? null :
    //                 <div>
    //                   <p>{this.state.uploadedFile.name}</p>
    //                   <img src={this.state.title_image} />
    //                 </div>
    //               }
    //             </div>
    //           </div>
    //         </label>
    //         <label>Project Blurb/Short Snippet
    //           <textarea placeholder="If you only had two sentences to describe your project..." onChange={this.update('blurb')} className="form-blurb"></textarea>
    //         </label>
    //         <label>Project Description
    //           <textarea  placeholder="Let's see your story telling skills at work here!" onChange={this.update('description')} className="form-description"></textarea>
    //         </label>
    //         <label>Category
    //           <select onChange={this.update('category_id')}>
    //             <option>What kind of QuickStarter is yours?</option>
    //             <option value="1" >Art</option>
    //             <option value="2">Food</option>
    //             <option value="3">Music</option>
    //             <option value="4">Technology</option>
    //             <option value="5">Fashion</option>
    //             <option value="6">Film & Video</option>
    //           </select>
    //         </label>
    //         <label>Funding Deadline
    //           <input type="date" onChange={this.update('funding_deadline')} ></input>
    //         </label>
    //         <label>Funding Goal
    //           <input type="number" onChange={this.update('funding_goal')}placeholder="How much to get your QuickStart?"></input>
    //         </label>
    //         <input className="form-submit btn" type="submit" value="Get Your QuickStart!" />
    //       </form>
    //   </div>
    // );
  }
}

export default withRouter(ProjectForm);
  