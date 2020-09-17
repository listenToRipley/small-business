//must include a function to delete 
import { connect } from 'react-redux';
import Listings from '../components/Listings'

const mapStateToProps = (state) => {
  return {
    business: state.businesses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBusiness: (index) => dispatch(deleteBusiness(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)