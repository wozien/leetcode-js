var checkInclusion = function(s1, s2) {
    let len1 = s1.length, len2 = s2.length
    if(len1 > len2) return false
    let need = {}, win = {}
    let left = right = 0, valid = 0

    for(let c of s1) need[c] = (need[c] || 0) + 1
    let size = Object.keys(need).length

    while(right < len2) {
        let c = s2[right]
        right++
        win[c] = (win[c] || 0) + 1
        if(need[c] && win[c] === need[c]) valid++

        while(valid === size) {
            if((right - left) === len1) return true
            c = s1[left]
            left++
            if(need[c] && win[c] === need[c]) valid--
            win[c]--
        }
    }

    return false
};

checkInclusion('ab', 'eidbaooo')