const returnYear = str => str.substr(0, 4);

const minToHours = min => {
  const hours = Math.floor(min/60);
  const minutes = min - hours*60;
  return `${hours} h ${minutes} min`;
};

export {
  returnYear,
  minToHours,
};
