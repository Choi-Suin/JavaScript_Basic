const arr = ["예병수", "류제천", "이재상", "최원장"];

// ["예병수 튜터", "류제천 튜터", "이재상 튜터", "최원장 튜터"]
console.log(arr);

const newArr = arr.map( (arr) => {
    return arr + ' 튜터'
} )

newArr.forEach(a => {
    console.log(a)
});