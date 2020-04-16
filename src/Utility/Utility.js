const util = {
  roundTo100: (mObj) => {
    const values = Object.values(mObj);
    if (
      values.reduce((a, b) => {
        return a + b;
      }, 0) === 100
    ) {
      return mObj;
    } else {
      const min = Math.min(...values.filter((e) => e > 0));
      for (const k of Object.keys(mObj)) {
        if (mObj[k] === min) {
          mObj[k] = mObj[k] + 1;
          return util.roundTo100(mObj);
        }
      }
    }
  },
};

// if (typeof require !== "undefined" && require.main === module) {
//   console.clear();
//   const o1 = { q0: 87, q1: 1, q23: 7 };
//
// }
export default util;
