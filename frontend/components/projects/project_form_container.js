import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { createProject } from '../actions/project_actions';

const mapStateToProps = (state) => {
  return ({
    project: state.entitiesReducer.projects[0]
  });
};

const mapDispatchToProps = dispatch => ({
    createProject: () => dispatch(createProject()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
