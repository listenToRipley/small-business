import {connect} from 'react-redux';
import Business from '../components/Business';

const mapStateToProps = (state) => {
  return {
    business: state.business
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    business: (id) => dispatch(findBusiness(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Business)