export function reducer(state,action){
    switch(action.type){
        case "EKLE":
            let array = [...state.warningCity]
            array.push(action.payload.selectCity)
            state.warningCity = array;
            return {...state}
        default:
            return state;
    }
}