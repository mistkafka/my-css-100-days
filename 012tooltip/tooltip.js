
// 0只是随意的数字，这些值都需要js去计算获取
// 主要通过offset[Top, Left, Width, Height]、offsetPatient来获取
const refrence = {
  offsetTop: 0,
  offsetLeft: 0,
  width: 0,
  height: 0
};
const tooltip = {
  width: 0,
  height: 0
};
const viewPort = {
  width: 0,
  height: 0
};
const certHeight = 0;


// 假设我们用fixed定位的方式来定位tooltip，那么下面offsetTop跟offsetLeft就是我们要求的模板值
let top;
let left;


// 当tooltip出现在上方
top = refrence.offsetTop - tooltip.height - certHeight;
left = refrence.offsetLeft + (refrence.width / 2) - (tooltip.width / 2);
let validPlace = true;
// 只要对角两个点，有一个点超出viewport，就说明这个方向是无法放置的。
if (offsetTop < 0 || offsetLeft < 0 || offsetTop + tooltip.height > viewPort.height || offsetLeft + tooltip.width > viewPort.width) {
  validePlace = false;
}

// bottom
top = refrence.offsetTop + refrence.height + certHeight;
left = refrence.offsetLeft + (refrence.width / 2) - (tooltip.width / 2);

// left, rigth省略。画完示意图之后，就会发现这些公式挺容易得出的。但是如果想通过纯css来写，那真是只能瞎计算了。
