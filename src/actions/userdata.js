const SET_USER_DATA = "SET_USER_DATA"
const APPEND_PROGRAM = "APPEND_PROGRAM"
const TOGGLE_COMPLETED_EXERCISE = "TOGGLE_COMPLETED_EXERCISE"
const TOGGLE_COMPLETED_EXERCISE_SET = "TOGGLE_COMPLETED_EXERCISE_SET"
const SET_EXERCISE_STATUS = "SET_EXERCISE_STATUS"
const SET_CURRENT_PROGRAM = "SET_CURRENT_PROGRAM"
const SET_CURRENT_TRAINING_DAY = "SET_CURRENT_DAY"
const SET_CURRENT_EXERCISE = "SET_CURRENT_EXERCISE"

function setCurrentProgram(currentProgramIndex) {
    return ({
        type: SET_CURRENT_PROGRAM,
        currentProgramIndex
    })
}

function setCurrentTrainingDay(currentTrainingDayIndex) {
    return ({
        type: SET_CURRENT_TRAINING_DAY,
        currentTrainingDayIndex
    })
}

function setCurrentExercise(currentExerciseIndex) {
    return ({
        type: SET_CURRENT_EXERCISE,
        currentExerciseIndex
    })
}
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

function toggleCompletedExerciseSet(exerciseIndex, exerciseSetIndex) {
    return ({
        type: TOGGLE_COMPLETED_EXERCISE_SET,
        persist: true,
        exerciseIndex,
        exerciseSetIndex
    })
}

function setExerciseStatus(exerciseIndex) {
    return ({
        type: SET_EXERCISE_STATUS,
        persist: true,
        exerciseIndex
    })
}


export {
    SET_CURRENT_PROGRAM,
    setCurrentProgram,
    SET_CURRENT_TRAINING_DAY,
    setCurrentTrainingDay,
    SET_CURRENT_EXERCISE,
    setCurrentExercise,
    SET_USER_DATA,
    setUserData,
    APPEND_PROGRAM,
    appendProgram,
    TOGGLE_COMPLETED_EXERCISE_SET,
    toggleCompletedExerciseSet,
    SET_EXERCISE_STATUS,
    setExerciseStatus
}