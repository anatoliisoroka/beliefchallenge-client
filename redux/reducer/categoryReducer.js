export const CATEGORY = "CATEGORY"

const initialState = {
  category: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY:
      // console.log(action.payload.response)
      // return Object.assign({}, state, { token: action.payload });
      return {
        category: [...action.payload.response.data]
      };
    default:
      return state;
  }
};