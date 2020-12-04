function solution(N, stages) {
  var answer = [];
  let failRate = Array(N);
  for (let i = 1; i <= N; i++) {
    let peopleCnt = 0;
    let stage = stages.length;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] === i) peopleCnt++;
      if (stages[j] < i) stage--;
    }
    failRate[i - 1] = { idx: i, val: peopleCnt / stage };
  }
  failRate.sort((a, b) => b.val - a.val);
  failRate.forEach((e) => answer.push(e.idx));
  return answer;
}
