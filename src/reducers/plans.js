import {
    SET_CURRENT_PROGRAM,
    SET_CURRENT_TRAINING_DAY,
    SET_CURRENT_EXERCISE,
    SET_USER_DATA,
    TOGGLE_COMPLETED_EXERCISE_SET,
    SET_EXERCISE_STATUS,
    APPEND_PROGRAM
} from '../actions/userdata'

import { SET_SCREEN_HEIGHT } from '../actions/config'
import { exerciseStatus } from '../constants/contants'

//  {
//     programs: [
//         {
//             id: 0,
//             uuid: "0000-0000000-00",
//             exercises: [
//                 {
//                     name: "",
//                     date: new Date(),
//                     status: "NOT_STARTED",
//                     completed: false,
//                     sets: [
//                         {
//                             intensity: 0,
//                             metric: "%",
//                             reps: 0,
//                             completed: false
//                         },
//                     ]
//                 }
//             ]
//         }
//     ]
// }


const initialState = {
    currentProgramIndex: 0,
    currentTrainingDayIndex: 0,
    currentExerciseIndex: 0,
    programs: [

    ]
}

const initialStateConfig = {
    screenHeight: 0
}

function config(state = initialStateConfig, action) {
    switch (action.type) {
        case SET_SCREEN_HEIGHT:
            return ({
                screenHeight: action.screenHeight
            })
    }
    return (state)
}

function plans(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_PROGRAM:
            return ({
                ...state,
                currentProgramIndex: action.currentProgramIndex
            })
        case SET_CURRENT_TRAINING_DAY:
            return ({
                ...state,
                currentTrainingDayIndex: action.currentTrainingDayIndex
            })
        case SET_CURRENT_EXERCISE:
            return ({
                ...state,
                currentExerciseIndex: action.currentExerciseIndex
            })
        case SET_USER_DATA:
            return ({
                ...state,
                ...action.userData
            })
        case APPEND_PROGRAM:
            {
                let programs = [...state.programs]
                programs.push(action.program)
                return ({
                    ...state,
                    programs
                })
            }
        case TOGGLE_COMPLETED_EXERCISE_SET:

            {
                let programs = [...state.programs]
                let { exercises } = programs[action.programIndex].trainingDays[action.trainingDayIndex]
                exercises[action.exerciseIndex].sets[action.exerciseSetIndex].completed =
                    !exercises[action.exerciseIndex].sets[action.exerciseSetIndex].completed

                return ({
                    ...state,
                    programs
                })
            }
        case SET_EXERCISE_STATUS:
            {
                let programs = [...state.programs]
                let { exercises } = programs[action.programIndex].trainingDays[action.trainingDayIndex]
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
                    programs
                })
            }
    }
    return state;
}

export default { plans, config }