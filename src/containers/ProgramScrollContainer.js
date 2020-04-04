import { connect } from 'react-redux'
import { setCurrentProgram } from '../actions/userdata'
import ProgramScroll from '../components/Home/ProgramScroll'
const mapStateToProps = (state) => {
    return ({ programs: state.programs })
}
const mapDispatchToProps = (dispatch) => ({
    setCurrentProgram: (programIndex) => {
        dispatch(setCurrentProgram(programIndex))
    }
})

const ProgramScrollView = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProgramScroll)

export default ProgramScrollView