import { combineReducers } from 'redux';

const rootReducer = combineReducers({ books, recommendedBooks });

export function books(state = [], action) {
  switch (action.type) {

    case "ADD_BOOK":
      return [...state, action.payload];
    case "REMOVE_BOOK":

      const idx = state.indexOf(action.payload);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}


export function recommendedBooks(state = [], action) {
  switch (action.type) {

    case "ADD_RECOMMENDED_BOOK":
      return [...state, action.recommendedBook];

    case "REMOVE_RECOMMENDED_BOOK":
      const idx = state.indexOf(action.payload);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}


// import { combineReducers } from 'redux'

// const rootReducer = combineReducers({books, recommendedBooks})

// export function books(state = [], action){
//   switch (action.type) {
//   case "ADD_BOOK":
//     return [].concat(state, action.payload)
//   case "REMOVE_BOOK":
//     let idx = state.indexOf(action.payload)
//     return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length))
//   default:
//     return state
//   }
// }


// export function recommendedBooks(state = [], action){
//   switch (action.type) {
//   case "ADD_RECOMMENDED_BOOK":
//     return [].concat(state, action.payload)
//   case "REMOVE_RECOMMENDED_BOOK":
//     let idx = state.indexOf(action.payload)
//     return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length))
//   default:
//     return state
//   }
// }
