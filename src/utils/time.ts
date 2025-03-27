//封装一个函数，获取现在的时间
export const getTime = ()=>{
  let message = ''
  //通过内置的构造函数Date
  let hours = new Date().getHours()
  if(hours <= 9) {
    message = '早上'
  } else if (hours <= 11) {
    message = '上午'
  } else if (hours <= 13) {
    message = '中午'
  } else if (hours <= 18) {
    message = '下午'
  } else{
    message = '晚上 '
  }
  return message
}