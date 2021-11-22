
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREAMENT":
            return { ...state,count: state.count + 1 };
        case "SQUARE":
            return {...state,square:Math.pow(state.count,2)}
        default:
            return state;
   }
}


 
export default reducer;