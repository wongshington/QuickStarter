import { connect } from 'react-redux';
import ShowcaseDashboard from './showcase_dashboard';
import { getRandomProject } from '../../actions/project_actions';


const mapStateToProps = ({ entitiesReducer, uiReducer }) => {
  if ( !entitiesReducer && !uiReducer ){
    return {project: undefined, randId: undefined};
  } 
  const randId = uiReducer.randProject || undefined;
  let projects = Object.values(entitiesReducer.projects).slice(0,3);
  return({
  project: entitiesReducer.projects[randId],
  projects: projects,
  randId
});
};

const mapDispatchToProps = dispatch => ({
  getRandomProject: (id) => dispatch(getRandomProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowcaseDashboard);
