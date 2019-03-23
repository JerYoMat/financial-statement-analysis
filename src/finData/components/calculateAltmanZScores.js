function calculateAltmanZScores(objInAry) {
  const normalizeValue = (arg) => {
    if (arg < -4) { return -4}
    if (arg > 8) { return 8}
    return arg
  }
  const displayData = (arg) => {
    if (arg < 0) { return 0}
    return arg
  }
  const altmanAry = []
  objInAry.map((obj) => {
    const a = (obj.ebit / obj.totalassets) * 3.107;
    const b = (obj.totalrevenue / obj.totalassets)*0.998;
    const c = ((obj.totalassets - obj.totalliabilities) / obj.totalliabilities)*0.42;
    const d = ((obj.totalcurrentassets - obj.totalcurrentliabilities) / obj.totalassets)*0.717;
    const e = (obj.retainedearnings / obj.totalassets)*0.847;
    const A = normalizeValue(a);
    const B = normalizeValue(b);
    const C = normalizeValue(c);
    const D = normalizeValue(d);
    const E = normalizeValue(e);
    const zScore = A + B + C+ D+ E;
    const periodAltObj = {
      A: A,
      B: B,
      C: C,
      D: D,
      E: E,
      displayData:[displayData(A),displayData(B),displayData(C),displayData(D),displayData(E)],
      data: [A, B, C, D, E],
      zScore: zScore
    }
    altmanAry.push(periodAltObj)
  })
  return altmanAry  
}





export default calculateAltmanZScores;
/* 
['EBIT/Total Assets', 'Net Sales/Total Assets', 'Book Value/Total Liabilities', 'Working Capital/Total Assets', 'Retained Earnings/Total Assets'],
A x 3.107 + Bx0.998 + Cx0.42 + Dx0.717 + E x 0.847

*/