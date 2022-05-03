import MovingLabel from './movingLabel';

// Moving labels.
const labelList = document.querySelectorAll('.moving-label');
labelList.forEach((label) => {
  const movingLabel = new MovingLabel(label, {});
});
