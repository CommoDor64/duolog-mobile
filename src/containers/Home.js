import { connect } from 'react-redux'
import { setUserData } from '../actions/userdata'
import Home from '../components/Home/Home'
import storage from '../storage/storage'
const mapStateToProps = (state) => {
    return ({ userData: state })
}

const mapDispatchToProps = (dispatch) => ({
    setUserData: (userData) => {
        dispatch(setUserData(userData))
    }
})

const HomeView = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default HomeView