const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function abc(arr) {
    let str = "value not avalible";
    const a = [];
    for (let i = 0; i <= arr.length - 1; i++) {

        a.push(
            {

                "previes": i === 0 ? "value not" : arr[i - 1],
                "current": arr[i],
                "next": i === arr.length-1 ? "value not" : arr[i + 1],
            }

        );

    }
    return a;
}

console.log(abc(numArr));

// [
//     { previes: 'value not', current: 1, next: 2 },
//     { previes: 1, current: 2, next: 3 },
//     { previes: 2, current: 3, next: 4 },
//     { previes: 4, current: 5, next: 6 },
//     { previes: 5, current: 6, next: 7 },
//     { previes: 6, current: 7, next: 8 },
//     { previes: 7, current: 8, next: 9 },
//     { previes: 8, current: 9, next: 10 },
//     { previes: 9, current: 10, next: 'value not' }
//   ]