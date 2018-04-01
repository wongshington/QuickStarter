import { connect } from 'react-redux';
import ShowcaseDashboard from './showcase_dashboard';
import { getProject } from '../../actions/project_actions';


const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  getProject: (id) => dispatch(getProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowcaseDashboard);
