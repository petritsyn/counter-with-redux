type InitialStateType = {
    isDisableButton: boolean
    maxValue: number
    startValue: number
}

type ActionsTypes = ReturnType<typeof onMaxValueChange> | ReturnType<typeof onStartValueChange>

const initialState = {
    isDisableButton: false,
    maxValue: 0,
    startValue: 0
}

export const SettingsReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {

        case 'ON-MAX-VALUE-CHANGE': {
            return {
                ...state,
                maxValue: action.maxValue,
                isDisableButton: true
            }
        }

        case "ON-START-VALUE-CHANGE": {
            return {
                ...state,
                startValue: action.startValue,
                isDisableButton: true
            }
        }

        default:
            return state
    }
}

export const onMaxValueChange = (maxValue: number) => {
    return {
        type: 'ON-MAX-VALUE-CHANGE',
        maxValue
    } as const
}

export const onStartValueChange = (startValue: number) => {
    return {
        type: 'ON-START-VALUE-CHANGE',
        startValue
    } as const
}