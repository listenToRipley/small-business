import {connect} from 'react-redux';
import Business from '../components/Business';

//this should be the individual business 
const mapStateToProps = (id) => {
  return {
    businesses: state.business.id
  }
}

export default connect(mapStateToProps)(Business)