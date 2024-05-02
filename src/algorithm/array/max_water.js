/**
 * Tìm lượng nước có thể chứa giữa các phần tử
 * Input: [2, 0, 2]
 * Ví dụ: 
 * ||~||
 * ||~||
 * 
 * [1, 2, 0, 3, 0, 1, 4, 0, 2]
 * Ví dụ:
 *                    ||
 *           || ~ ~ ~ ||
 *      || ~ || ~ ~ ~ || ~ || 
 * || ~ || ~ || ~ || ~|| ~ ||
 * 
 * Ý tưởng:
 * - Duyệt qua từng phần tử
 * - Ở mỗi phần tử sẽ tìm xem chiều cao cao nhất phía bên trái của phần tử và chiều cao cao nhất phía bên phải của phần tử
 * - Lấy ra chiều cao thấp hơn
 * - So chiều cao thấp hơn đó với phần tử hiện tại
 *    + Nếu ra > 0 thì đó là số nước mà phần tử hiện tại có thể chứa
 *    + Nếu ra < 0 thì phần tử đó không thể chứa nước
 */

const maxWater = (array) => {
    let resMaxWater = 0;

    for(let i = 0; i < array.length; i++) {
        let maxLeft = array[i];
        for(let j = 0; j < i; j++) {
            maxLeft = Math.max(maxLeft, array[j]);
        }

        let maxRight = array[i];
        for(let k = i + 1; k < array.length; k++) {
            maxRight = Math.max(maxRight, array[k]);
        }

        resMaxWater += Math.min(maxLeft, maxRight) - array[i];
    }

    return resMaxWater;
}

console.log({
    maxWater: maxWater([3, 0, 99, 0, 4])
});