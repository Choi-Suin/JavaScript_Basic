let 현재숫자 = 0;
const 최대숫자 = 10;

function 업데이트숫자() {
  if (현재숫자 <= 최대숫자) {
    console.log(현재숫자);
    현재숫자++;
  } else {
    clearInterval(타이머);
  }
}

const 타이머 = setInterval(업데이트숫자, 1000);
