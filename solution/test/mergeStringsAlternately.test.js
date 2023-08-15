/* 1768. Merge Strings Alternately
 You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string. 

 Return the merged string.
*/

describe('mergeStringsAlternately()', () => {

    it('mergeStringsAlternately is defined', () => {
        expect(mergeStringsAlternately).toBeDefined();
    });

    it('mergeStringsAlternately("abc", "pqr") should return "apbqcr"', () => {
        expect(mergeStringsAlternately('abc', 'pqr')).toBe('apbqcr');
    });
    
    it('mergeStringsAlternately("ab", "pqrs") should return "apbqrs"', () => {
        expect(mergeStringsAlternately('ab', 'pqrs')).toBe('apbqrs');
    });
    
    it('mergeStringsAlternately("abcd", "pq") should return "apbqcd"', () => {
        expect(mergeStringsAlternately('abcd', 'pq')).toBe('apbqcd');
    });
}); 

function mergeStringsAlternately (word1, word2) { 
    let result = '';
    let i = 0;
    let j = 0;
    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            result += word1[i];
            i++;
        }
        if (j < word2.length) {
            result += word2[j];
            j++;
        }
    }
    return result;
}