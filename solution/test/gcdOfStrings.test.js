/* 
1071. Greatest Common Divisor of Strings

For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/

describe('gcdOfStrings()', () => {
    it('gcdOfStrings is defined', () => {
        expect(gcdOfStrings).toBeDefined();
    });

    it('gcdOfStrings returns the largest string x such that x divides both str1 and str2', () => {
        expect(gcdOfStrings("ABCABC", "ABC")).toEqual("ABC");
        expect(gcdOfStrings("ABABAB", "ABAB")).toEqual("AB");
        expect(gcdOfStrings("LEET", "CODE")).toEqual("");
    })

}); 




function gcdOfStrings(str1, str2) { 

    function check(str, x) {
        const n = str.length / x.length;
        let ans = "";
        for (let i = 1; i <= n; i++) {
            ans += x;
        }
        return ans === str;
    }

    const n1 = str1.length;
    const n2 = str2.length;

    for( let i = Math.min(n1, n2); i >= 1; i--) {
        if(n1 % i === 0 && n2 % i === 0) {
            const x = str1.substring(0, i);
            if(check(str1, x) && check(str2, x)) {
                return x;
            }
        }
    }
    return "";
}