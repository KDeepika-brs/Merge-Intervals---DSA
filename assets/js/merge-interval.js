function mergeIntervals() {
  const intervalsInput = document.getElementById('intervalsInput').value.trim();

  try {
    const intervals = JSON.parse(intervalsInput);
    const mergedIntervals = mergeOverlapping(intervals);
    displayResult(mergedIntervals);
  } catch (error) {
    alert('Invalid input. Please enter intervals in the correct format.');
  }
}

function mergeOverlapping(intervals) {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let previous = intervals[0];

  for (let i = 1; i < intervals.length; i += 1) {
    if (previous[1] >= intervals[i][0]) {
      previous = [previous[0], Math.max(previous[1], intervals[i][1])];
    } else {
      result.push(previous);
      previous = intervals[i];
    }
  }

  result.push(previous);

  return result;


}

function displayResult(result) {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '<h5><u>Merged Intervals:</h5>';
  outputDiv.innerHTML += JSON.stringify(result);
}
