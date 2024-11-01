// 获取当前时间
export function getCurrentTime() {
  let newDate = new Date();
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1 < 10 ? '0' + (newDate.getMonth() + 1) : newDate.getMonth() + 1;
  let date = newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate();
  let hh = newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours();
  let mm = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes();
  let ss = newDate.getSeconds() < 10 ? '0' + newDate.getSeconds() : newDate.getSeconds();
  let week = newDate.getDay();
  let weeks = ['日', '一', '二', '三', '四', '五', '六'];
  let getWeek = '星期' + weeks[week];
  let currentTime = year + '-' + month + '-' + date + ' ' + hh + ':' + mm + ':' + ss;
  return currentTime;
}
