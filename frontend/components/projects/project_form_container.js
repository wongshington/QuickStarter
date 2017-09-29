import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { createProject, clearErrors } from '../../actions/form_actions';
import { getCategories } from '../../actions/category_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

  return ({
    currentUser: state.sessionReducer.currentUser,
    errors: state.errorsReducer.formErrorsReducer,
    path: ownProps.match.params.path
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    createProject: (project) => dispatch(createProject(project)),
    getCategories: () => dispatch(getCategories()),
    clearErrors: () => dispatch(clearErrors())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectForm));
