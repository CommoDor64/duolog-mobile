import { connect } from 'react-redux'
import { toggleCompletedExerciseSet, setExerciseStatus } from '../actions/userdata'
import TrainingDay from '../components/Program/TrainingDay'
const mapStateToProps = (state) => {
    const { programs, currentProgramIndex, currentTrainingDayIndex } = state
    return ({
        trainingDay: programs[currentProgramIndex].trainingDays[currentTrainingDayIndex],
        currentProgramIndex,
        currentTrainingDayIndex
    })
}
const mapDispatchToProps = (dispatch) => ({
    toggleCompletedExerciseSet: (exerciseIndex, exerciseSetIndex) => {
        dispatch(toggleCompletedExerciseSet(exerciseIndex, exerciseSetIndex))
        dispatch(setExerciseStatus(exerciseIndex))
    }
})

const TrainingDayView = connect(
    mapStateToProps,
    mapDispatchToProps
)(TrainingDay)

export default TrainingDayView