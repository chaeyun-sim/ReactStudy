import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0,  //초기값 설정
    dummy: 'dumbdumb',
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3,
    }
};

// const counter = (state, action) => {
//     if(typeof state === 'undefined') {
//         return initialState;
//     }

//     // ...
    
//     return state;
// }

const counter = (state = initialState, action) => {
    switch(action.type){
        case types.INCREMENT:
            return {...state, number: state.number + 1, dumbObject: {...state.dumbObject, u:0}};
            // ...state : 기존의 state 값이 적용됨
            // 위 코드는 기존의 값은 놔두고 새로운 값을 설정할 경우에 기존의 값을 덮어씌우게 됨
            // initialState 내부에서 한 값만 바꾸고 싶을 때(예: dumbObject) :
            // return {
            //     ...state,
            //     number : state.number+1,
            //     dumbObject: { ...state.dumbObject, u : 0}
            // }
        case types.DECREMENT:
            return {...state,number: state.number - 1};
        default:
            return state;
    }
}

export default counter;