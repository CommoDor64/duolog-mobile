import {
    SET_USER_DATA,
    TOGGLE_COMPLETED_EXERCISE_SET,
    SET_EXERCISE_STATUS,
} from '../actions/plans'
import { exerciseStatus } from '../constants/contants'

const initialState = {
    plans: {
        id: 0,
        uuid: "0000-0000000-00",
        details: [
            {
                name: "",
                date: new Date(),
                completed: false,
                sets: [
                    {
                        intensity: 0,
                        metric: "%",
                        reps: 0,
                        completed: false
                    },
                ]
            }
        ]
    }
}

function plans(state = initialState, action) {
    let exercises = [...state.plans.details]
    switch (action.type) {
        case SET_USER_DATA:
            return ({
                ...state,
                ...action.userData
            })
        case TOGGLE_COMPLETED_EXERCISE_SET:
            exercises[action.exerciseIndex].sets[action.exerciseSetIndex].completed =
                !exercises[action.exerciseIndex].sets[action.exerciseSetIndex].completed
            return ({
                ...state,
                plans: {
                    details: exercises
                }
            })
        case SET_EXERCISE_STATUS:
            const setsNumber = exercises[action.exerciseIndex].sets.length
            const completedSetsNumber = exercises[action.exerciseIndex].sets.filter(({ completed }) => !completed).length

            switch (completedSetsNumber) {
                case 0:
                    exercises[action.exerciseIndex].status = exerciseStatus.COMPLETED.name
                    break;
                case setsNumber:
                    exercises[action.exerciseIndex].status = exerciseStatus.NOT_STARTED.name
                    break;
                default:
                    exercises[action.exerciseIndex].status = exerciseStatus.IN_PROGRESS.name
                    break;
            }
            return ({
                ...state,
                plans: {
                    details: exercises
                }
            })
    }
    return state;
}

export default plans