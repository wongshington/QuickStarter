import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import { getProjects } from '../../actions/project_actions';

const mapStateToProps = (state) => ({
    projects: getProjects(state)

});

const mapDispatchToProps = dispatch => ({
    getProjects: () => dispatch(getProjects()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);
