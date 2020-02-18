const SET_USER_DATA = "SET_USER_DATA"
const APPEND_PROGRAM = "APPEND_PROGRAM"
const TOGGLE_COMPLETED_EXERCISE = "TOGGLE_COMPLETED_EXERCISE"
const TOGGLE_COMPLETED_EXERCISE_SET = "TOGGLE_COMPLETED_EXERCISE_SET"
const SET_EXERCISE_STATUS = "SET_EXERCISE_STATUS"

function setUserData(userData) {
    return ({
        type: SET_USER_DATA,
        userData
    })
}

const model = {
    details: [
        {
            name: "Squat",
            date: "some date",
            status: "NOT_STARTED",
            completed: false,
            sets: [
                { "intensity": 80, "metric": "%", "reps": 5, "completed": false },
                { "intensity": 85, "metric": "%", "reps": 5, "completed": false },
                { "intensity": 90, "metric": "%", "reps": 5, "completed": false },
                { "intensity": 95, "metric": "%", "reps": 5, "completed": false },
                { "intensity": 100, "metric": "%", "reps": 5, "completed": false }
            ]
        },
    ]
}

function appendProgram(program) {
    return ({
        type: APPEND_PROGRAM,
        persist: true,
        program
    })
}

function toggleCompletedExerciseSet(programIndex, exerciseIndex, exerciseSetIndex) {
    return ({
        type: TOGGLE_COMPLETED_EXERCISE_SET,
        persist: true,
        programIndex,
        exerciseIndex,
        exerciseSetIndex
    })
}

function setExerciseStatus(programIndex, exerciseIndex) {
    return ({
        type: SET_EXERCISE_STATUS,
        persist: true,
        programIndex,
        exerciseIndex
    })
}


export {
    SET_USER_DATA,
    setUserData,
    APPEND_PROGRAM,
    appendProgram,
    TOGGLE_COMPLETED_EXERCISE_SET,
    toggleCompletedExerciseSet,
    SET_EXERCISE_STATUS,
    setExerciseStatus
}