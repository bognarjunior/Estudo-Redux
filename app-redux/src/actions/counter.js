const INCREMENT_TYPE = 'INCREMENT_TYPE';
const DECREMENT_TYPE = 'DECREMENT_TYPE';

export const increment = () => {
  return {
    type: INCREMENT_TYPE
  }
}

export const decrement = () => {
  return {
    type: DECREMENT_TYPE
  }
}
