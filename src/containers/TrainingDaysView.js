import { connect } from 'react-redux'
import { setCurrentTrainingDay, toggleCompletedExerciseSet, setExerciseStatus } from '../actions/userdata'
import TrainingDays from '../components/Program/TrainingDays'
import storage from '../storage/storage'
const mapStateToProps = (state) => {
    const { programs, currentProgramIndex, currentTrainingDayIndex } = state
    return ({
        programs,
        trainingDays: programs[currentProgramIndex].trainingDays,
        currentProgramIndex,
        currentTrainingDayIndex
    })
}
const mapDispatchToProps = (dispatch) => ({
    toggleCompletedExerciseSet: (programIndex, trainingDayIndex, exerciseIndex, exerciseSetIndex) => {
        dispatch(toggleCompletedExerciseSet(programIndex, trainingDayIndex, exerciseIndex, exerciseSetIndex))
        dispatch(setExerciseStatus(programIndex, trainingDayIndex, exerciseIndex))
    },
    setCurrentTrainingDay: (currentTrainingDayIndex) => {
        dispatch(setCurrentTrainingDay(currentTrainingDayIndex))
    }
})

const TrainingDaysView = connect(
    mapStateToProps,
    mapDispatchToProps
)(TrainingDays)

export default TrainingDaysView