const todo = {
  id: 1,
  할일: "8시기상",
  완료여부: false,
};

// 여기에 코드를 작성해주세요.
const newTodo = {...todo}

newTodo.완료여부 = "true"

console.log(todo)
console.log(newTodo);
// 결과
// { id: 1, '할일': '8시기상', '완료여부': false }
// { id: 1, '할일': '8시기상', '완료여부': true }