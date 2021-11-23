import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return { ...state, count: state.count + 1 };
    case "SQUARE":
      return { ...state, square: Math.pow(state.count, 2) };
    case "CREATE_PARA":
      const para = React.createElement(
        "p",
        {},
        "this has been created through react"
      );
      return { ...state, para };

    default:
      return state;
  }
};

export default reducer;
