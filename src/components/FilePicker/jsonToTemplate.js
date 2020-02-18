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

// e.g "70% 3*5"
const reGroupedExerciseSet =
    /([1-9][0-9]?|100)([\%])[ ]?([1-9][0-9]|[1-9])[\*]([1-9][0-9]|[1-9])/
const reGroupedExerciseName = /(Squat)|(Bench)|(Deadlift)|(Snatch)|(Clean)/
function jsonToTemplate(json) {
    exerciseNames = []
    exercises = []
    rowLength = json
    for (rowIndex in json) {
        for (cellIndex in json[rowIndex]) {
            cell = json[cellIndex][rowIndex]

            if (cell === undefined || cell === "") {
                continue
            }
            if (reGroupedExerciseName.test(cell)) {
                let exerciseName = [...cell.match(reGroupedExerciseName)][0]
                exerciseNames.push(exerciseName)
            }

            if (reGroupedExerciseSet.test(cell)) {
                let matchGroups = [...cell.match(reGroupedExerciseSet)]
                let sets = []
                for (let i = 0; i < matchGroups[4]; i++) {
                    sets.push(createExerciseSet(matchGroups[1], matchGroups[2], matchGroups[3]))
                }
                let exercise = createExercise(exerciseNames[cellIndex - 1], sets)
                exercises.push(exercise)
            }
        }
    }
    return ({
        "id": 1,
        "uuid": "0000-11111111-00-11",
        exercises
    })

}
export { jsonToTemplate }