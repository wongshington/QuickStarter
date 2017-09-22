import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import { getProjects } from '../../actions/project_actions';
import { selectAllProjects } from '../../reducers/selectors';


const mapStateToProps = (state) => {
  return ({
    projects: selectAllProjects(state)
  });
};

const mapDispatchToProps = dispatch => ({
    getProjects: () => dispatch(getProjects()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
