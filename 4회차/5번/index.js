// 여기에 1번 문제의 답을 작성하세요.

const getPost01 = async () => {
    const response = await fetch('https://dummyjson.com/products')

    const data = await response.json();
    console.log(data)

    return data
}

// getPost01() 함수 호출
getPost01()


// 이전 코드

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);



// 여기에 2번 문제의 답을 작성하세요.

const getPost02 = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: 'BMW Pencil',
                /* other product data */
            })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        alert("원인을 알 수 없는 에러가 발생하였습니다. 잠시 후에 다시 시도해주세요.")
    }
}

// getPost02() 함수 호출
getPost02()


// 이전 코드

// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     /* other product data */
//     })
// })
// .then(res => res.json())
// .then(console.log);
