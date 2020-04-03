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