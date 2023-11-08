const 숫자 = document.querySelectorAll(".number");
for (let i = 0; i < 숫자.length; i++) {
  let 현재숫자 = parseInt(숫자[i].textContent);
  let 새로운숫자 = 현재숫자 + 10;
  숫자[i].textContent = 새로운숫자;
}
