
import { connect } from 'react-redux';

import ProjectShow from './project_show';
import { getProject, patchProject } from '../../actions/project_actions';



const mapStateToProps = (state, ownProps) => {
  return ({
  project: state.entitiesReducer.projects[ownProps.match.params.projectId]
});
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getProject: (id) => dispatch(getProject(id)),
  patchProject: (project) => dispatch(patchProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
