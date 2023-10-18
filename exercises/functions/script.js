function numberSum(x, y){
    return x + y;
}

console.log(numberSum(5, 2));


function vowelCaps(str){
    for (x = 0; x < str.length; x++){
        if (str.charAt(x) == "a" || str.charAt(x) == "e" || str.charAt(x) == "i" || str.charAt(x) == "o" || str.charAt(x) == "u" || str.charAt(x) == "y" || str.charAt(x) == "å" || str.charAt(x) == "ä" || str.charAt(x) == "ö"){
            str = str.substring(0, x) + str.charAt(x).toUpperCase() + str.substring(x + 1);
        }
    }
    return str;
}

console.log(vowelCaps("Hej på dig käre vän"));


function smallestNum(...nums){
    for (x = 0; x < nums.length - 1; x++){
        if (nums[x] < nums[x + 1]){
            nums[x + 1] = nums[x];
        }
    }
    return nums[nums.length - 1];
}

console.log(smallestNum(293, 112, 911, 69, 78, 2));