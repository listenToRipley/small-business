import {connect} from 'react-redux';
import AddBusiness from '../components/AddBusiness';
import {addBusiness} from '../redux/actions'

const mapDispatchProps = (dispatch) => {
  return {
    addBusiness: (business) => dispatch(addBusiness(business))
  }
}

export default connect(bull, mapDispatchProps)(AddBusiness)