package LEET_CODE.Java;

/**
 * 
 * Example 1:
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 * 
 * Example 2:
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 * 
 * Example 3:
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 */
public class PalindromNumber {
    public static boolean isPalindrome(int x) {
        if(x < 0)
            return false;

        int revertNumber = 0;
        int xOriginal = x;

        while(x != 0) {
            revertNumber = revertNumber * 10 + (x % 10);
            x = x / 10;
        }

        if(xOriginal != revertNumber)
            return false;

        return true;
    }

    public static void main(String[] args) {
        System.out.println("Result 1: " + isPalindrome(121));
        System.out.println("Result 2: " + isPalindrome(-121));
        System.out.println("Result 2: " + isPalindrome(10));
    }
}
