type InitialStateType = {
    isMaxValueChange: boolean
    maxValue: number
}

type ActionsTypes = ReturnType<typeof onMaxValueChange>

const initialState = {
    isMaxValueChange: false,
    maxValue: 0
}

export const SettingsReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {

        case 'ON-MAX-VALUE-CHANGE': {
            return {
                ...state,
                maxValue: action.maxValue,
                isMaxValueChange: true
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