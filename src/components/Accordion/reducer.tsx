type ActionType = {
    type: string
}
export const TODDLE_COLLAPSED = "TOGGLE-COLLAPSED"
export type StateType ={
    collapsed: boolean

}

export const  reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TODDLE_COLLAPSED:
                return {
                    ...state,
                    collapsed: !state.collapsed
                };
        default:
            throw new Error("Bad action type")
    }
    return state;
}