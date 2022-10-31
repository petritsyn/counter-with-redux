type InitialStateType = {
    isDisableButton: boolean
    maxValue: number
    startValue: number
    isMessage: boolean
}

type ActionsTypes = ReturnType<typeof onMaxValueChange> | ReturnType<typeof onStartValueChange> | ReturnType<typeof setValue>

const initialState = {
    isDisableButton: true,
    maxValue: 0,
    startValue: 0,
    isMessage: false
}

export const SettingsReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {

        case 'ON-MAX-VALUE-CHANGE': {
            return {
                ...state,
                maxValue: action.maxValue,
                isDisableButton: false,
                isMessage: true
            }
        }

        case "ON-START-VALUE-CHANGE": {
            return {
                ...state,
                startValue: action.startValue,
                isDisableButton: false,
                isMessage: true
            }
        }

        case "SET-VALUE": {
            return {
                ...state,
                isDisableButton: true,
                isMessage: false
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

export const setValue = () => {
    return {
        type: 'SET-VALUE'
    } as const
}