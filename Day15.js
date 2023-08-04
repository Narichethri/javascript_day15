function longestSubsequence(array) {
    let maxlength = 0;
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let length = 1;
        let sampleArray = [array[i],];
        for (let j = i + 1; j < array.length; j++) {
            sampleLength=sampleArray.length;
            if (sampleArray[sampleLength-1] < array[j]) {
                length++;
                sampleArray.push(array[j]);
            }
        }
        if (maxlength < length) {
            maxlength = length;
            newArray = sampleArray
        }

    }
    console.log("MaxLength Subsequence Array is "+ newArray);
    console.log("Max Length is "+maxlength)
}

longestSubsequence([6,7,8,1,2,3,4,5]);
