const SET_USER_DATA = "SET_USER_DATA"
const TOGGLE_COMPLETED_EXERCISE = "TOGGLE_COMPLETED_EXERCISE"
const TOGGLE_COMPLETED_EXERCISE_SET = "TOGGLE_COMPLETED_EXERCISE_SET"
const SET_EXERCISE_STATUS = "SET_EXERCISE_STATUS"

function setUserData(userData) {
    return ({
        type: SET_USER_DATA,
        userData
    })
}

function toggleCompletedExerciseSet(exerciseIndex, exerciseSetIndex) {
    return ({
        type: TOGGLE_COMPLETED_EXERCISE_SET,
        exerciseIndex,
        exerciseSetIndex
    })
}

function setExerciseStatus(exerciseIndex) {
    return ({
        type: SET_EXERCISE_STATUS,
        exerciseIndex
    })
}



export {
    SET_USER_DATA,
    setUserData,
    TOGGLE_COMPLETED_EXERCISE_SET,
    toggleCompletedExerciseSet,
    SET_EXERCISE_STATUS,
    setExerciseStatus
}