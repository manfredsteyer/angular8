import nQueens from './n-queens';

addEventListener('message', ({ data }) => {
  const result = nQueens(data.count);
  postMessage(result, undefined);
});
