import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { createProject } from '../actions/project_actions';

const mapStateToProps = (state) => {
  return ({
    projects: selectAllProjects(state)
  });
};

const mapDispatchToProps = dispatch => ({
    getProjects: () => dispatch(getProjects()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
