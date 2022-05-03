import MovingLabel from '../src/movingLabel';
console.log('test');

// Moving labels.
const labelList = document.querySelectorAll('.moving-label');
labelList.forEach((label) => {
  const movingLabel = new MovingLabel(label, {});
});
