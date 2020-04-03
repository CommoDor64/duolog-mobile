import { connect } from 'react-redux'
import { setCurrentProgram, toggleCompletedExerciseSet, setExerciseStatus } from '../actions/userdata'
import ProgramScroll from '../components/Home/ProgramScroll'
import storage from '../storage/storage'
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