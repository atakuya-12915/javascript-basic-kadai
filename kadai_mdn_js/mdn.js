const today = () => {
  const date = new Date();
  return `${date.getFullYear()} 年 ${
    date.getMonth() + 1
  } 月 ${date.getDate()} 日`;
};

console.log(today());
