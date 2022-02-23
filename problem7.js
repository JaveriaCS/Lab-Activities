// Activity #7:

function first_last_1(nums) {
    var end_pos = nums.length - 1;
    return nums[0] == 10 || nums[end_pos] == 10;
}
console.log(first_last_1([10, 5]));
console.log(first_last_1([1, 3, 5]));
console.log(first_last_1([2, 4, 6, 10]));
