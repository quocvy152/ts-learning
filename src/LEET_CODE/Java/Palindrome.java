package LEET_CODE.Java;

/**
    Example 1:
        Input: s = "A man, a plan, a canal: Panama"
        Output: true
        Explanation: "amanaplanacanalpanama" is a palindrome.

    Example 2:
        Input: s = "race a car"
        Output: false
        Explanation: "raceacar" is not a palindrome.

    Example 3:
        Input: s = " "
        Output: true
        Explanation: s is an empty string "" after removing non-alphanumeric characters.
        Since an empty string reads the same forward and backward, it is a palindrome.
 */

public class Palindrome {
    public static boolean isPalindrome(String s) {
        // "\\s+" là regex của khoảng trắng 
        String noSpaces = s.replaceAll("\\s+", "");

        String strLowerCase = noSpaces.toLowerCase();

        // Loại bỏ tất cả các ký tự không phải là chữ cái hoặc số
        String strHandled = strLowerCase.replaceAll("[^a-zA-Z0-9]", "");

        if(strHandled == "")
            return true;

        for (int i = 0; i < strHandled.length() / 2; i++) {
            if(strHandled.charAt(i) != strHandled.charAt(strHandled.length() - 1 - i)) {
                return false;
            }
        }

        return true;
    }

    public static void main(String []args) {
        System.out.println("RESULT CHECK STRING IS PALINDROME: " + isPalindrome("A man, a plan, a canal: Panama"));
        System.out.println("RESULT CHECK STRING IS PALINDROME 2: " + isPalindrome("race a car"));
        System.out.println("RESULT CHECK STRING IS PALINDROME 3: " + isPalindrome(" "));
    }
}
