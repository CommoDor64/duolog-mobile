import { connect } from 'react-redux'
import { toggleCompletedExerciseSet, setExerciseStatus } from '../actions/plans'
import Plan from '../components/Plan/PlanView'

const mapStateToProps = (state) => ({ exercises: state.plans.details })
const mapDispatchToProps = (dispatch) => ({
    toggleCompletedExerciseSet: (exerciseIndex, exerciseSetIndex) => {
        dispatch(toggleCompletedExerciseSet(exerciseIndex, exerciseSetIndex))
        dispatch(setExerciseStatus(exerciseIndex))
    }
})

const PlanView = connect(
    mapStateToProps,
    mapDispatchToProps
)(Plan)

export default PlanView