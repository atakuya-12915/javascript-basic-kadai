// const today = () => {
//   const date = new Date();
//   return `${date.getFullYear()} 年 ${
//     date.getMonth() + 1
//   } 月 ${date.getDate()} 日`;
// };

// console.log(today());

// 模範回答
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; //月はindexでは0から始まるため+1する
const date = today.getDate();

console.log(year + "年" + month + "月" + date + "日");
