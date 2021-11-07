module.exports = {
  getTomorrow: () => {
    const today = new Date();
    const tomorrow = new Date(today.setDate(today.getDate() + 1));
    return tomorrow;
  },

  // getTimeStamp: (range) => {
  //   const today = new Date();
  //   let nowYear = today.getFullYear();
  //   if (range === 1) {
  //     nowYear += 1;
  //   }
  //   const nowMonth = today.getMonth() + 1;
  //   const nowDate = today.getDate() + 1;
  //   //0000-00-00형식으로 만들기 위해 필요시 0을 추가하는 함수
  //   const fillZero = (num, digits) => {
  //     let zero = "";
  //     num = num.toString();
  //     if (num.length < digits) {
  //       for (let i = 0; i < digits - num.length; i++) {
  //         zero += "0";
  //       }
  //     }
  //     return zero + num;
  //   };
  //   return (
  //     fillZero(nowYear, 4) +
  //     "-" +
  //     fillZero(nowMonth, 2) +
  //     "-" +
  //     fillZero(nowDate, 2)
  //   );
  // },
  // calcDday: () => {},
};
