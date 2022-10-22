type initialStateType = {
    counterValue: number
}
type ActionsTypes = ReturnType<typeof increaseCounterValue>

const initialState = {
    counterValue: 0
}

export const CounterReducer = (state: initialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'INCREASE-COUNTER-VALUE': {
            return {
                ...state,
                counterValue: action.counterValue + 1
            }
        }

        default:
            return state
    }
}

export const increaseCounterValue = (counterValue: number) => {
    return {
        type: 'INCREASE-COUNTER-VALUE',
        counterValue
    }
}