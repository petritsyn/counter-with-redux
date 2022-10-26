type initialStateType = {
    counterValue: number
    maxValue: number
}
type ActionsTypes = ReturnType<typeof increaseCounterValue> | ReturnType<typeof resetCounter>

const initialState = {
    counterValue: 0,
    maxValue: 0
}

export const CounterReducer = (state: initialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'INCREASE-COUNTER-VALUE': {
            return {
                ...state,
                counterValue: action.counterValue + 1
            }
        }

        case 'RESET-COUNTER': {
            return {
                ...state,
                counterValue: 0
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
    } as const
}

export const resetCounter = () => {
    return {
        type: 'RESET-COUNTER'
    } as const
}