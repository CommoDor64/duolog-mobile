import { connect } from 'react-redux'
import { toggleCompletedExerciseSet, setExerciseStatus } from '../actions/userdata'
import Program from '../components/Program/Program'
import storage from '../storage/storage'
const mapStateToProps = (state) => {
    return ({ programs: state.programs })
}
const mapDispatchToProps = (dispatch) => ({
    toggleCompletedExerciseSet: (programIndex, exerciseIndex, exerciseSetIndex) => {
        dispatch(toggleCompletedExerciseSet(programIndex, exerciseIndex, exerciseSetIndex))
        dispatch(setExerciseStatus(programIndex, exerciseIndex))
        storage.setUserData()
    }
})

const ProgramView = connect(
    mapStateToProps,
    mapDispatchToProps
)(Program)

export default ProgramView