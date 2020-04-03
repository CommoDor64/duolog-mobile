import { connect } from 'react-redux'
import { setCurrentProgram, toggleCompletedExerciseSet, setExerciseStatus } from '../actions/userdata'
import ProgramScroll from '../components/Home/ProgramScroll'
import storage from '../storage/storage'
const mapStateToProps = (state) => {
    return ({ programs: state.programs })
}
const mapDispatchToProps = (dispatch) => ({
    toggleCompletedExerciseSet: (programIndex, trainingDayIndex, exerciseIndex, exerciseSetIndex) => {
        dispatch(toggleCompletedExerciseSet(programIndex, trainingDayIndex, exerciseIndex, exerciseSetIndex))
        dispatch(setExerciseStatus(programIndex, trainingDayIndex, exerciseIndex))
    },
    setCurrentProgram: (programIndex) => {
        dispatch(setCurrentProgram(programIndex))
    }
})

const ProgramScrollView = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProgramScroll)

export default ProgramScrollView