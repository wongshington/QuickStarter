import React from 'react';
import { withRouter } from 'react-router-dom';
import FirstForm from '../forms/first_page';
import SecondForm from '../forms/second_page';
import ThirdForm from '../forms/third_page';


class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          formPage: 1,
          title: "",
          blurb: "",
          description: "",
          funding_deadline: "",
          title_image: null,
          category_id: "",
          funding_goal: "",
          total_funded: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.update = this.update.bind(this);
  }


  componentDidMount() {
    this.props.clearErrors();
    this.props.getCategories();
  }

  // onImageDrop(files) {
  //   this.setState({
  //     uploadedFile: files[0]
  //   });
  //   this.handleImageUpload(files[0]);
  // }

  // handleImageUpload(file) {
  //   let upload = request.post(CLOUDINARY_UPLOAD_URL)
  //                       .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
  //                       .field('file', file);

  //   upload.end((err, response) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //     if (response.body.secure_url !== '') {
  //       this.setState({
  //         title_image: response.body.secure_url
  //       });
  //     }
  //   });
  // }

  handleFile(e){
    // debugger
    const file = e.target.files[0];
    this.setState({title_image: file})

  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = Object.keys(this.state).reduce( (acc, curr) => {
      if (curr == "title_image") return acc;
      acc.append(`project[${curr}]`, this.state[`${curr}`]);
      return acc;
    }, new FormData());
    formData.append("project[photo]", this.state.title_image);

    // let newProject = Object.assign({}, this.state);
    // if (this.state.title_image === "") {
    //   newProject = Object.assign(newProject, {title_image: PHOTO});
    // }

    this.props.createProject(formData).then((result) => {
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
                  handleFile={this.handleFile}
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
                  deadline={this.state.funding_deadline}
                  handleSubmit={this.handleSubmit}/>;
      default:
        return <FirstForm
                  title={this.state.title}
                  category={this.state.category_id}
                  update={this.update}
                  categories={this.props.categories} />;
    }
  }

  pageTurner(dir){ 
    const newForm = dir + this.state.formPage;
    if (newForm > 3 || newForm < 1) return;
    return e => {
      this.setState({formPage: newForm});
    };
  }

  displayNavButtons(){
    const next = this.state.formPage >= 3 ? <div></div> : <div className="btn" disabled onClick={this.pageTurner(1)}>Next</div>;
    const prev = this.state.formPage <= 1 ? <div></div> : <div className="btn" onClick={this.pageTurner(-1)}>Previous</div>;

    return (
      <div className="form--nav grid">
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
  }
}

export default withRouter(ProjectForm);
  