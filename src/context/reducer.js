export function reducer(state,action){
    switch(action.type){
        case "EKLE":
            return {...state,warningCity : [...state.warningCity, action.payload.selectCity]}
        default:
            return state;
    }
}