/**
 * Input: 'I love you so much' => Output: 'much so you love I'
 */

const reverseWords = (str) => {
    const strArr = str.split(' ');

    let strReverse = '';

    for(let word = strArr.length - 1; word >= 0; word--) {
        let space = word === 0 ? '' : ' ';
        strReverse = strReverse + strArr[word] + space;
    }

    return strReverse;
}

console.log({
    reverseWords: reverseWords('I love you so much'),
    reverseWords2: reverseWords('geeks quiz practice code'),
    reverseWords3: reverseWords('i love programming very much'),
})