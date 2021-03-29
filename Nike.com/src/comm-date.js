'use strict';

// *** getDate() : 입력 받은 파라미터 값을 이용해서 오늘 날짜로부터 며칠 전,후의 날짜를 구해 줌 ***
// paramDay
// - 음수 : 오늘 날짜로 부터 며칠 전을 구할지
// - 양수 : 오늘 날짜로 부터 며칠 후를 구할지
export function getDate(paramDay) {
  let today = new Date();
  let beforeMonth = new Date(
    Date.parse(today) + paramDay * 1000 * 60 * 60 * 24
  ); //한 달전

  return beforeMonth;
}
