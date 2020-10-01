//must include a function to delete 
import { connect } from 'react-redux';
import Listings from '../components/Listings'
import {deleteBusiness} from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    username: state.username,
    businesses: state.businesses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBusiness: (index) => dispatch(deleteBusiness(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)