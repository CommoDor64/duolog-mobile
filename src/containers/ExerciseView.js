import { connect } from 'react-redux'
import { toggleCompletedExerciseSet, setExerciseStatus } from '../actions/userdata'
import Exercise from '../components/Program/Exercise'
import storage from '../storage/storage'
const mapStateToProps = (state) => {
    const { programs, currentProgramIndex, currentTrainingDayIndex } = state
    return ({
        trainingDay: programs[currentProgramIndex].trainingDays[currentTrainingDayIndex],
        currentProgramIndex,
        currentTrainingDayIndex
    })
}
const mapDispatchToProps = (dispatch) => ({
    toggleCompletedExerciseSet: (programIndex, trainingDayIndex, exerciseIndex, exerciseSetIndex) => {
        dispatch(toggleCompletedExerciseSet(programIndex, trainingDayIndex, exerciseIndex, exerciseSetIndex))
        dispatch(setExerciseStatus(programIndex, trainingDayIndex, exerciseIndex))
    }
})

const ProgramView = connect(
    mapStateToProps,
    mapDispatchToProps
)(Program)

export default ProgramView