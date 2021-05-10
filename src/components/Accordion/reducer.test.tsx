import {reducer, StateType, TODDLE_COLLAPSED} from "./reducer";

test('collapsed should be true', () =>{
// data
const state: StateType = {
    collapsed: false
}
// action
    const newState = reducer(state, {type: TODDLE_COLLAPSED})

//ecpection
    expect(newState.collapsed).toBe(true);

})

test('collapsed should be false', () =>{
// data
    const state: StateType = {
        collapsed: true
    }
// action
    const newState = reducer(state, {type: TODDLE_COLLAPSED})

//ecpection
    expect(newState.collapsed).toBe(false);
})

test('reducer should throw error', () =>{
// data
    const state: StateType = {
        collapsed: true
    }
// action


//ecpection
    expect ( () => {
        reducer(state, {type: "FAKETYPE"})

    }).toThrowError();

})

