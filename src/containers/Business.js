import {connect} from 'react-redux';
import Business from '../components/Business';

//this should be the individual business 
const mapStateToProps = (index) => {
  return {
    business: state.business.id
  }
}

export default connect(mapStateToProps)(Business)