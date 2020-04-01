export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  // console.log(action.restaurant)
  switch (action.type) {

    case 'ADD_RESTAURANT':
      // console.log({
      //   ...state,
      //   restaurants: [...state.restaurants, action.restaurant]
      // })
      return {
        ...state,
        restaurants: [...state.restaurants, action.restaurant]
      }

    default:
      return state;

  }
};
