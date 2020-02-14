import React from 'react';
const initialState = {
    userData: {
        plans: {
            id: 0,
            uuid: "0000-0000000-00",
            details: [
                {
                    name: "",
                    date: new Date(),
                    status: "NOT_STARTED",
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
};
const Store = React.createContext(initialState);

// export function planReducer(state, action) {
//     switch (action.type) {
//         case 'toggleCompleteExercise':
//             state.plans.details[
//                 action.payload.sessionIndex
//             ].sets[action.payload.setIndex].completed = !state.plans.details[].sets[].completed
//             return {
//                 ...state,
//                 plans: { ...plans, }
//             };
//         default:
//             throw new Error();
//     }
// }
export default Store;