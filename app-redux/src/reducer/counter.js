const INCREMENT_TYPE = 'INCREMENT_TYPE';
const DECREMENT_TYPE = 'DECREMENT_TYPE';

const initialState = {number: 0};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_TYPE:
      return Object.assign({}, state, {
        number: state.number + 1
      })
    
    case DECREMENT_TYPE:
      return Object.assign({}, state, {
        number: state.number - 1
      })

    default:
      return state;
  }
}