function createExerciseSet(intensity, unit, reps) {
    return ({
        intensity,
        unit,
        reps,
        completed: false
    })
}

function createExercise(name, sets) {
    return ({
        name,
        date: new Date(),
        status: "NOT_STARTED",
        completed: false,
        sets
    })
}

function createTrainingDay(day, exercises) {
    return ({
        day,
        completed: false,
        status: "NOT_STARTED",
        exercises
    })
}
function createProgram(id, uuid, trainingDays) {
    return ({
        id,
        uuid,
        trainingDays
    })
}
// e.g "70% 3*5"
const reGroupedExerciseSet =
    /([1-9][0-9]?|100)([\%])[ ]?([1-9][0-9]|[1-9])[\*]([1-9][0-9]|[1-9])/
const reGroupedExerciseName = /(Squat)|(Bench)|(Deadlift)|(Snatch)|(Clean)/
// function jsonToTemplate(json) {
//     exerciseNames = []
//     exercises = []
//     rowLength = json
//     for (rowIndex in json) {
//         for (cellIndex in json[rowIndex]) {
//             cell = json[cellIndex][rowIndex]

//             if (cell === undefined || cell === "") {
//                 continue
//             }
//             if (reGroupedExerciseName.test(cell)) {
//                 let exerciseName = [...cell.match(reGroupedExerciseName)][0]
//                 exerciseNames.push(exerciseName)
//             }

//             if (reGroupedExerciseSet.test(cell)) {
//                 let matchGroups = [...cell.match(reGroupedExerciseSet)]
//                 let sets = []
//                 for (let i = 0; i < matchGroups[4]; i++) {
//                     sets.push(createExerciseSet(matchGroups[1], matchGroups[2], matchGroups[3]))
//                 }
//                 let exercise = createExercise(exerciseNames[cellIndex - 1], sets)
//                 exercises.push(exercise)
//             }
//         }
//     }
//     return ({
//         "id": 1,
//         "uuid": "0000-11111111-00-11",
//         exercises
//     })

// }
const obj = [
    [
        "",
        "Squat",
        "Bench",
        "Deadlft",
        "Snatch",
        "Clean",
        "Saturday",
    ],
    [
        "Monday",
        "70% 3*5",
        "75% 3*5",
        "80% 3*5",
        "85% 3*5",
        "90% 3*5",
        "95% 3*5",
    ],
    [
        "Tuesday",
        "70% 3*5",
        "75% 3*5",
        "80% 3*5",
        "85% 3*5",
        "90% 3*5",
        "95% 3*5",
    ],
    [
        "Wednesday",
        "70% 3*5",
        "75% 3*5",
        "80% 3*5",
        "85% 3*5",
        "90% 3*5",
        "95% 3*5",
    ],
    [
        "Thursday",
        "70% 3*5",
        "75% 3*5",
        "80% 3*5",
        "85% 3*5",
        "90% 3*5",
        "95% 3*5",
    ],
    [
        "Friday",
        "70% 3*5",
        "75% 3*5",
        "80% 3*5",
        "85% 3*5",
        "90% 3*5",
        "95% 3*5",
    ],
    [
        "Saturday",
        "70% 3*5",
        "75% 3*5",
        "80% 3*5",
        "85% 3*5",
        "90% 3*5",
        "95% 3*5",
    ],
    [
        "Sunday",
        "70% 3*5",
        "75% 3*5",
        "80% 3*5",
        "85% 3*5",
        "90% 3*5",
        "95% 3*5",
    ],
    [
        "",
    ],
]

function createExerciseSets(exerciseSetString) {
    if (!reGroupedExerciseSet.test(exerciseSetString)) return {};

    let matchGroups = [...exerciseSetString.match(reGroupedExerciseSet)]
    let sets = []
    for (let i = 0; i < matchGroups[4]; i++) {
        sets.push({
            intensity: matchGroups[1],
            unit: matchGroups[2],
            reps: matchGroups[3],
            completed: false
        })
    }
    return (sets)
}

function jsonToTemplate(json) {
    exercises = json[0].filter(exercise => exercise !== "")
    const trainingDays = [...json.slice(1)]
        .filter(item => item[0] !== '')
        .map(item => {
            const day = item[0]
            const exercisesOfDay = [...item.slice(1)]
                .map((exerciseInfo, exerciseIndex) => {
                    const exerciseSet = createExerciseSets(exerciseInfo)
                    return (
                        createExercise(exercises[exerciseIndex], exerciseSet)
                    )
                })
            return (
                createTrainingDay(day, exercisesOfDay)
            )
        })
    return (
        createProgram(
            1,
            "0000-11111111-00-11",
            trainingDays
        )
    )
}

export { jsonToTemplate }