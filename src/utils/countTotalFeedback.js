export function countTotalFeedback(state) {
  const keys = Object.keys(state);
  return keys.reduce((acc, key) => {
    return (acc += state[key]);
  }, 0);
}
