import {connect} from 'react-redux';
import Business from '../components/Business';

const mapStateToProps = (state) => {
  return {
    businesses: state.business
  }
}

export default connect(mapStateToProps)(Business)